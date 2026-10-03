import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY is missing from .env.local');
}

const ai = new GoogleGenAI({
  apiKey
});

const response = await ai.models.generateContent({
  model: 'gemini-3.8-flash',
  contents: 'Reply with exactly: SCIFINITY GEMINI CONNECTION OK'
});

console.log(response.text);