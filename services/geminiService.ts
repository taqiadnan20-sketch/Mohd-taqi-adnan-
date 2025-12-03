import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EDUCATION, SKILLS, CONTACT_INFO } from '../constants';

const SYSTEM_INSTRUCTION = `
You are "Taqi's AI Assistant", an intelligent portfolio agent for Mohd Taqi Adnan.
Your goal is to answer questions about Mohd Taqi Adnan based strictly on his resume information provided below.

Resume Context:
Name: ${PERSONAL_INFO.name}
Headline: ${PERSONAL_INFO.headline}
About: ${PERSONAL_INFO.about}
Location: ${CONTACT_INFO.location}
Contact: ${CONTACT_INFO.email}, ${CONTACT_INFO.phone}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.duration})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Guidelines:
1. Be professional, polite, and concise.
2. If asked about contact info, provide the email and phone number.
3. If asked about something not in the resume (like his favorite food), politely say you only have information regarding his professional background.
4. Highlight his MBA in Finance and proficiency in Tally Prime when relevant.
5. Keep responses short (under 3 sentences usually) as this is a chat widget.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  const client = initializeGemini();
  if (!client) {
    throw new Error("Gemini API Client could not be initialized.");
  }

  // Map internal history format to Gemini Chat history format
  // Note: Simple mapping here. For a persistent chat, we would use chat.sendMessage
  // But for a simple stateless-feeling widget, generating content with system instruction is robust.
  
  try {
    const model = "gemini-2.5-flash";
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
