export type AIGovernanceClass = "GREEN" | "YELLOW" | "RED";

export type AIApprovalLevel =
  | "AUTONOMOUS"
  | "OWNER_REVIEW"
  | "OWNER_REQUIRED";

export type AIProposalStatus =
  | "PROPOSED"
  | "APPROVED"
  | "REJECTED"
  | "DEFERRED"
  | "IMPLEMENTED";

export interface AIReviewFinding {
  id: string;
  severity: string;
  title: string;
  evidence: string;
  existingRecommendation: string;

  impact: string;
  rootCause: string;

  governanceClass: AIGovernanceClass;
  approval: AIApprovalLevel;

  risk: string;
  confidence: number;

  recommendedAction: string;

  affectedFiles: string[];
  proposedChanges: string[];

  validationPlan: string[];

  status: AIProposalStatus;
}

export interface AIReviewInput {
  audit: string;
  auditJson: unknown;

  governance: string;
  designConstitution: string;
  auditChecklist: string;
  agents: string;
}

export interface AIReviewResult {
  generatedAt: string;

  modelProvider: string;
  modelName: string;

  reviewVersion: string;

  findings: AIReviewFinding[];

  summary: {
    total: number;
    green: number;
    yellow: number;
    red: number;
  };
}

export interface AIModelAdapter {
  review(input: AIReviewInput): Promise<AIReviewResult>;
}