/* ==========================================================================
   SCIFINITY CONTENT TYPES & SCHEMAS
   ========================================================================== */

export type ContentStatus = 
  | 'CONFIRMED'          // Confirmed institutional fact or copy
  | 'REVIEW_REQUIRED'   // Requires founder review/confirmation before finalization
  | 'PLACEHOLDER'       // Institutional item missing official data (addresses, contacts)
  | 'PLANNED'           // Future capability not yet currently offered
  | 'TRANSLATION_REQUIRED' // Human Bangla translation needed
  | 'COMING_SOON';      // Upcoming content in preparation

export interface ContentItem<T = string> {
  id: string;
  status: ContentStatus;
  source: string;
  en: T;
  bn?: T;
  notes?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  route: string;
  status: ContentStatus;
}

export interface NavItem {
  id: string;
  labelEn: string;
  labelBn: string;
  route: string;
  category: 'WHY' | 'HOW' | 'WHAT' | 'WHO' | 'EVIDENCE' | 'OPPORTUNITY' | 'RESOURCES' | 'WHERE' | 'JOIN';
}

export interface ProgramInfo {
  id: string;
  titleEn: string;
  titleBn?: string;
  targetLevelEn: string;
  subjects: string[];
  summaryEn: string;
  summaryBn?: string;
  route: string;
  status: ContentStatus;
}

export interface BatchDefinition {
  name: string;
  maxStudents: number;
  locations: string[];
  scheduleStatus: ContentStatus | string;
  timing?: string;
}

export interface LocationInfo {
  id: string;
  nameEn: string;
  nameBn?: string;
  status: ContentStatus;
  addressEn: string;
  addressStatus: ContentStatus;
  facilitiesEn: string;
  facilitiesStatus: ContentStatus;
  batches: string[];
}

export interface VaultResource {
  id: string;
  title: string;
  category: 'Study Tips' | 'Exam Tips' | 'Physics Tips' | 'Mathematics Tricks' | 'Board Questions & Solutions';
  level?: string;
  status: ContentStatus;
  description: string;
  readTime?: string;
}

export interface AdmissionFormData {
  fullName: string;
  email?: string;
  currentProgram: 'SSC' | 'HSC' | 'Admission Test' | '';
  targetSubjects: string[];
  phoneNumber: string;
  preferredLocation: 'Uttara' | 'Patuatuli' | '';
  preferredBatch: 'Dawn' | 'Zenith' | 'Prime' | 'Vesper' | '';
  reasonForApplying: string;
}
