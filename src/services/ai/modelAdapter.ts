import type {
  AIModelAdapter,
  AIReviewInput,
  AIReviewResult
} from "./types.ts";

/**
 * Provider-independent AI adapter.
 *
 * This deliberately contains no API key and no external model SDK.
 * A real provider adapter can be added later without changing the
 * rest of the SCIFINITY AI architecture.
 */
export class UnconfiguredAIModelAdapter implements AIModelAdapter {
  async review(_input: AIReviewInput): Promise<AIReviewResult> {
    throw new Error(
      "No AI model provider is configured yet. " +
      "The SCIFINITY AI Review Contract is ready, but a model adapter " +
      "has not been connected."
    );
  }
}