
import React, { useState, useRef } from 'react';
import { processExcelFiles } from '../services/excelService';
import { getSmartTip } from '../services/geminiService';

const ExcelMerger: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ url: string; name: string; rows: number } | null>(null);
  const [smartTip, setSmartTip] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      setResult(null);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setResult(null);
  };

  const handleMerge = async () => {
    if (files.length < 1) return;
    setIsProcessing(true);
    try {
      const merged = await processExcelFiles(files);
      const url = URL.createObjectURL(merged.blob);
      setResult({ url, name: merged.fileName, rows: merged.rowCount });
      
      // Fetch a smart tip from Gemini
      const tip = await getSmartTip(files.length, merged.rowCount);
      setSmartTip(tip);
    } catch (error: any) {
      alert("Error processing files: " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const clearAll = () => {
    setFiles([]);
    setResult(null);
    setSmartTip('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="p-8 md:p-12">
          {/* Upload Area */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer ${
              files.length > 0 ? 'border-indigo-200 bg-indigo-50/30' : 'border-slate-200 hover:border-indigo-400 bg-slate-50'
            }`}
          >
            <input 
              type="file" 
              multiple 
              accept=".xlsx,.xls,.csv" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Click to select or drag files here
            </h3>
            <p className="text-slate-500 text-sm text-center">
              Supports .xlsx, .xls, and .csv files. Multiple files allowed.
            </p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8 space-y-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-slate-700 flex items-center">
                  Selected Files
                  <span className="ml-2 bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">{files.length}</span>
                </h4>
                <button 
                  onClick={clearAll}
                  className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                >
                  Clear All
                </button>
              </div>
              <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {files.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 group">
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-semibold text-slate-700 truncate">{file.name}</p>
                        <p className="text-xs text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFile(idx)}
                      className="p-1 hover:bg-rose-100 rounded-full text-slate-300 hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8">
            {!result ? (
              <button
                disabled={files.length === 0 || isProcessing}
                onClick={handleMerge}
                className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 transition-all flex items-center justify-center space-x-2 ${
                  files.length === 0 || isProcessing
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-[0.98]'
                }`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Merge {files.length} Files</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-bold text-emerald-900 text-lg">Merge Successful!</h5>
                    <p className="text-emerald-700 text-sm">Combined {result.rows} rows of data into one file.</p>
                  </div>
                </div>
                
                {smartTip && (
                  <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 italic text-amber-900 text-sm flex items-center space-x-3">
                    <span className="text-lg">💡</span>
                    <span><strong>Pro Tip:</strong> {smartTip}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href={result.url} 
                    download={result.name}
                    className="flex-grow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 text-center flex items-center justify-center space-x-2 active:scale-[0.98] transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download Merged XLSX</span>
                  </a>
                  <button 
                    onClick={clearAll}
                    className="bg-white hover:bg-slate-50 text-slate-600 font-bold py-4 px-8 rounded-2xl border border-slate-200 transition-all active:scale-[0.98]"
                  >
                    Start New
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Security Footer */}
        <div className="bg-slate-50 px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-400 font-medium tracking-wide uppercase">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 5.618a11.955 11.955 0 01-8.618 3.040L3 5.618v4.343c0 5.891 3.797 10.926 9 12.394a11.952 11.952 0 009-12.394V5.618l-.382-.074z" /></svg> LOCAL PROCESSING</span>
            <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> SECURE SSL</span>
          </div>
          <span>No files are ever uploaded to our servers</span>
        </div>
      </div>
    </div>
  );
};

export default ExcelMerger;
