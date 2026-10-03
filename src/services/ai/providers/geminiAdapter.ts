import { GoogleGenAI } from '@google/genai';
import type {
  AIModelAdapter,
  AIReviewInput,
  AIReviewResult
} from '../types.ts';
import { buildAIReviewPrompt } from '../reviewPrompt.ts';

const DEFAULT_MODEL = 'gemini-3.8-flash';

function getGeminiApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is missing from the environment.');
  }

  return apiKey;
}

export class GeminiAIModelAdapter implements AIModelAdapter {
  private readonly client: GoogleGenAI;
  private readonly modelName: string;

  constructor(modelName = process.env.SCIFINITY_AI_MODEL ?? DEFAULT_MODEL) {
    this.client = new GoogleGenAI({
      apiKey: getGeminiApiKey()
    });

    this.modelName = modelName;
  }

  async review(input: AIReviewInput): Promise<AIReviewResult> {
    const prompt = buildAIReviewPrompt(input);

    const response = await this.client.models.generateContent({
      model: this.modelName,
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error('Gemini returned an empty response.');
    }

    let result: AIReviewResult;

    try {
      result = JSON.parse(text) as AIReviewResult;
    } catch {
      throw new Error('Gemini returned invalid JSON.');
    }

    if (!Array.isArray(result.findings)) {
      throw new Error('Gemini response is missing a valid findings array.');
    }

    return result;
  }
}