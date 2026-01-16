import { GoogleGenAI } from "@google/genai";
import { Song } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMusicRecommendation = async (mood: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert DJ in Angolan Music (Kuduro, Semba, Kizomba, Afro House). 
      Suggest 3 real Angolan songs that match this mood/activity: "${mood}". 
      Format: "Artist - Song (Genre)". Keep it brief.`,
    });
    return response.text || "Sem recomendações no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não foi possível carregar recomendações. Verifique sua conexão.";
  }
};

export const getLyrics = async (song: Song): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Find or generate the likely lyrics (in Portuguese) for the Angolan song "${song.title}" by "${song.artist}". 
      If you don't know the exact lyrics, generate a poetic verse in the style of ${song.genre} that fits the title.
      Return only the lyrics text.`,
    });
    return response.text || "Letra não disponível.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro ao carregar a letra.";
  }
};

export const discoverNewTalent = async (): Promise<string> => {
   try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a fictional profile for a new rising star in Angolan music. 
      Name, Genre (Kuduro or Afro House), and a short bio about their origin in Luanda.`,
    });
    return response.text || "Sem novos talentos.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "";
  }
}