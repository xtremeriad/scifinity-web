import { GoogleGenAI } from '@google/genai';
import type {
  AIModelAdapter,
  AIReviewInput,
  AIReviewResult
} from '../types.ts';
import { buildAIReviewPrompt } from '../reviewPrompt.ts';

const DEFAULT_MODEL = 'gemini-3.8-flash';

const AI_REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    generatedAt: {
      type: 'string',
      description: 'ISO timestamp for when the review was generated.'
    },
    modelProvider: {
      type: 'string',
      description: 'AI model provider name.'
    },
    modelName: {
      type: 'string',
      description: 'AI model name.'
    },
    reviewVersion: {
      type: 'string',
      description: 'Version of the SCIFINITY AI review contract.'
    },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          severity: {
            type: 'string'
          },
          title: {
            type: 'string'
          },
          evidence: {
            type: 'string'
          },
          existingRecommendation: {
            type: 'string'
          },
          impact: {
            type: 'string'
          },
          rootCause: {
            type: 'string'
          },
          governanceClass: {
            type: 'string',
            enum: ['GREEN', 'YELLOW', 'RED']
          },
          approval: {
            type: 'string',
            enum: ['AUTONOMOUS', 'OWNER_REVIEW', 'OWNER_REQUIRED']
          },
          risk: {
            type: 'string'
          },
          confidence: {
            type: 'number'
          },
          recommendedAction: {
            type: 'string'
          },
          affectedFiles: {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          proposedChanges: {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          validationPlan: {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          status: {
            type: 'string',
            enum: [
              'PROPOSED',
              'APPROVED',
              'REJECTED',
              'DEFERRED',
              'IMPLEMENTED'
            ]
          }
        },
        required: [
          'id',
          'severity',
          'title',
          'evidence',
          'existingRecommendation',
          'impact',
          'rootCause',
          'governanceClass',
          'approval',
          'risk',
          'confidence',
          'recommendedAction',
          'affectedFiles',
          'proposedChanges',
          'validationPlan',
          'status'
        ]
      }
    },
    summary: {
      type: 'object',
      properties: {
        total: {
          type: 'number'
        },
        green: {
          type: 'number'
        },
        yellow: {
          type: 'number'
        },
        red: {
          type: 'number'
        }
      },
      required: ['total', 'green', 'yellow', 'red']
    }
  },
  required: [
    'generatedAt',
    'modelProvider',
    'modelName',
    'reviewVersion',
    'findings',
    'summary'
  ]
};

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

const maxAttempts = 3;
const fallbackModelName = 'gemini-3.7-flash';
const secondFallbackModelName = 'gemini-3.6-flash';

let response;
let successfulModelName = this.modelName;

const modelsToTry = [
  this.modelName,
  fallbackModelName,
  secondFallbackModelName
];

for (const modelName of modelsToTry) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      response = await this.client.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: AI_REVIEW_SCHEMA
        }
      });

      successfulModelName = modelName;
      break;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      const isTransient =
        message.includes('503') ||
        message.includes('UNAVAILABLE') ||
        message.includes('429') ||
        message.includes('RESOURCE_EXHAUSTED');

      if (!isTransient) {
        throw error;
      }

      if (attempt === maxAttempts) {
        if (modelName === fallbackModelName) {
          throw error;
        }

        console.log(
          `Gemini model ${modelName} remained unavailable after ${maxAttempts} attempts. ` +
          `Switching to fallback model ${fallbackModelName}...`
        );

        break;
      }

      const delayMs = 1000 * 2 ** (attempt - 1);

      console.log(
        `Gemini temporarily unavailable on ${modelName}. ` +
        `Retrying in ${delayMs / 1000}s ` +
        `(attempt ${attempt + 1}/${maxAttempts})...`
      );

      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  if (response) {
    break;
  }
}

if (!response) {
  throw new Error('Gemini request failed without a response.');
}

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

    if (!result.summary) {
      throw new Error('Gemini response is missing the review summary.');
    }

    // These fields are controlled by SCIFINITY rather than the model.
    result.generatedAt = new Date().toISOString();
    result.modelProvider = 'Google Gemini';
    result.modelName = successfulModelName;
    result.reviewVersion = '1.0';

    return result;
  }
}