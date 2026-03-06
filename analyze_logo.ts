import { GoogleGenAI } from "@google/genai";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await fetch("https://i.imgur.com/gB6o74h.jpeg");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          inlineData: {
            data: base64,
            mimeType: "image/jpeg"
          }
        },
        "What are the primary, secondary, and accent colors in this logo? Provide hex codes. Describe the visual style."
      ]
    });
    console.log(result.text);
  } catch (e) {
    console.error(e);
  }
}
run();
