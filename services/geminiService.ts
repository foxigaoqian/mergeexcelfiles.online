
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartTip = async (fileCount: number, rowCount: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I just merged ${fileCount} files with a total of ${rowCount} rows. Give me a 1-sentence tip for managing large datasets in Excel.`,
      config: {
        systemInstruction: "You are a helpful data analyst. Keep your tips concise and professional."
      }
    });
    return response.text || "Keep your headers clean and consistent for better analysis.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Consolidating your data is the first step toward better business insights.";
  }
};
