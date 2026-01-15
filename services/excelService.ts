
import { MergedResult } from '../types';

declare const XLSX: any;

export const processExcelFiles = async (files: File[]): Promise<MergedResult> => {
  // Runtime check to ensure the external script loaded correctly
  if (typeof XLSX === 'undefined') {
    throw new Error("The Excel processing library (SheetJS) failed to load. Please check your internet connection and refresh the page.");
  }

  return new Promise((resolve, reject) => {
    try {
      const readers = files.map(file => {
        return new Promise<any[]>((resolveRead) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              const data = new Uint8Array(e.target?.result as ArrayBuffer);
              const workbook = XLSX.read(data, { type: 'array' });
              
              // Collect data from all sheets in this workbook
              let allSheetData: any[] = [];
              workbook.SheetNames.forEach((sheetName: string) => {
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                allSheetData = [...allSheetData, ...json];
              });
              resolveRead(allSheetData);
            } catch (err) {
              console.error(`Error reading file ${file.name}:`, err);
              resolveRead([]); // Resolve empty if one file fails to prevent blocking others
            }
          };
          reader.onerror = () => resolveRead([]);
          reader.readAsArrayBuffer(file);
        });
      });

      Promise.all(readers).then(results => {
        // Flatten all data rows
        const combinedData = results.flat();
        
        if (combinedData.length === 0) {
          throw new Error("No data found in selected files or files were corrupted.");
        }

        // Create new workbook and sheet
        const newSheet = XLSX.utils.json_to_sheet(combinedData);
        const newWorkbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(newWorkbook, newSheet, "MergedData");

        // Generate binary output
        const wbout = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });

        resolve({
          blob,
          fileName: `merged_data_${new Date().getTime()}.xlsx`,
          rowCount: combinedData.length
        });
      }).catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};
