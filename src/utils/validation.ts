/*
===============================================================================
FORM VALIDATION UTILITY
===============================================================================

Runtime validation for student admission/contact form data.

Important:
TypeScript interfaces protect compile-time code.
They do NOT validate runtime data coming from forms, APIs, or other
external boundaries.

This validator:
- validates required fields
- validates optional fields when supplied
- validates enum values
- validates arrays
- validates email format
- validates phone numbers
- validates reasonable string lengths
- trims user input
- returns only the validated admission payload
===============================================================================
*/

import type { AdmissionFormData } from '../content/types.ts';

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  currentProgram?: string;
  targetSubjects?: string;
  phoneNumber?: string;
  preferredLocation?: string;
  preferredBatch?: string;
  reasonForApplying?: string;
}

const CURRENT_PROGRAMS = [
  'SSC',
  'HSC',
  'Admission Test'
] as const;

const PREFERRED_LOCATIONS = [
  'Uttara',
  'Patuatuli'
] as const;

const PREFERRED_BATCHES = [
  'Dawn',
  'Zenith',
  'Prime',
  'Vesper'
] as const;

const LIMITS = {
  fullName: 120,
  email: 254,
  phoneNumber: 30,
  targetSubject: 80,
  maxTargetSubjects: 20,
  reasonForApplying: 2000
} as const;

function isOneOf<T extends readonly string[]>(
  value: string,
  allowedValues: T
): boolean {
  return allowedValues.includes(value);
}

function isValidEmail(value: string): boolean {
  /*
   * This is intentionally a practical email validation rule,
   * not a full RFC parser.
   */
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function validateTargetSubjects(
  value: unknown,
  errors: ValidationErrors
): string[] {
  /*
   * targetSubjects is defined as string[] in AdmissionFormData.
   * Empty array is allowed because some programs may not require
   * subject selection.
   */

  if (value === undefined || value === null) {
    return [];
  }

  if (!Array.isArray(value)) {
    errors.targetSubjects = 'Invalid subject selection.';
    return [];
  }

  if (value.length > LIMITS.maxTargetSubjects) {
    errors.targetSubjects =
      `You can select up to ${LIMITS.maxTargetSubjects} subjects.`;
    return [];
  }

  const normalizedSubjects: string[] = [];

  for (const subject of value) {
    if (typeof subject !== 'string') {
      errors.targetSubjects = 'Invalid subject selection.';
      return [];
    }

    const normalizedSubject = subject.trim();

    if (!normalizedSubject) {
      errors.targetSubjects = 'Invalid subject selection.';
      return [];
    }

    if (normalizedSubject.length > LIMITS.targetSubject) {
      errors.targetSubjects =
        `Each subject must be ${LIMITS.targetSubject} characters or fewer.`;
      return [];
    }

    normalizedSubjects.push(normalizedSubject);
  }

  return normalizedSubjects;
}

export function validateAdmissionForm(
  data: AdmissionFormData
): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  /*
  ============================================================================
  FULL NAME
  ============================================================================
  */

  const fullName = normalizeString(data.fullName);

  if (!fullName || fullName.length < 2) {
    errors.fullName =
      'Please enter your full name (minimum 2 characters).';
  } else if (fullName.length > LIMITS.fullName) {
    errors.fullName =
      `Full name must be ${LIMITS.fullName} characters or fewer.`;
  }

  /*
  ============================================================================
  EMAIL
  ============================================================================
  */

  const email = normalizeString(data.email);

  // Email is optional.
  if (email) {
    if (email.length > LIMITS.email) {
      errors.email =
        `Email must be ${LIMITS.email} characters or fewer.`;
    } else if (!isValidEmail(email)) {
      errors.email =
        'Please enter a valid email address.';
    }
  }

  /*
  ============================================================================
  CURRENT PROGRAM
  ============================================================================
  */

  const currentProgram = normalizeString(data.currentProgram);

  if (!currentProgram) {
    errors.currentProgram =
      'Please select your target academic program.';
  } else if (
    !isOneOf(currentProgram, CURRENT_PROGRAMS)
  ) {
    errors.currentProgram =
      'Please select a valid academic program.';
  }

  /*
  ============================================================================
  TARGET SUBJECTS
  ============================================================================
  */

 validateTargetSubjects(
  data.targetSubjects,
  errors
);

  /*
  ============================================================================
  PHONE NUMBER
  ============================================================================
  */

  const rawPhone = normalizeString(data.phoneNumber);

  /*
   * Accepts common Bangladeshi/international formats while preventing
   * arbitrary text.
   *
   * Examples:
   * +880 1712 345678
   * 01712345678
   * +8801712345678
   */
  const digitsOnly = rawPhone.replace(/\D/g, '');

  const isValidPhonePattern =
    /^[+]?[\d\s\-().]{7,30}$/.test(rawPhone) &&
    digitsOnly.length >= 7 &&
    digitsOnly.length <= 15;

  if (!rawPhone) {
    errors.phoneNumber =
      'Please enter a valid contact phone number.';
  } else if (rawPhone.length > LIMITS.phoneNumber) {
    errors.phoneNumber =
      `Phone number must be ${LIMITS.phoneNumber} characters or fewer.`;
  } else if (!isValidPhonePattern) {
    errors.phoneNumber =
      'Please enter a valid contact phone number (e.g. +880 1712 345678 or 01712345678).';
  }

  /*
  ============================================================================
  PREFERRED LOCATION
  ============================================================================
  */

  const preferredLocation =
    normalizeString(data.preferredLocation);

  if (!preferredLocation) {
    errors.preferredLocation =
      'Please select a preferred center (Uttara or Patuatuli).';
  } else if (
    !isOneOf(preferredLocation, PREFERRED_LOCATIONS)
  ) {
    errors.preferredLocation =
      'Please select a valid center.';
  }

  /*
  ============================================================================
  PREFERRED BATCH
  ============================================================================
  */

  const preferredBatch =
    normalizeString(data.preferredBatch);

  if (!preferredBatch) {
    errors.preferredBatch =
      'Please select your preferred batch.';
  } else if (
    !isOneOf(preferredBatch, PREFERRED_BATCHES)
  ) {
    errors.preferredBatch =
      'Please select a valid batch.';
  }

  /*
  ============================================================================
  REASON FOR APPLYING
  ============================================================================
  */

  const reasonForApplying =
    normalizeString(data.reasonForApplying);

  if (!reasonForApplying || reasonForApplying.length < 15) {
    errors.reasonForApplying =
      'Please share your reason for applying (minimum 15 characters).';
  } else if (
    reasonForApplying.length > LIMITS.reasonForApplying
  ) {
    errors.reasonForApplying =
      `Your response must be ${LIMITS.reasonForApplying} characters or fewer.`;
  }

  /*
  ============================================================================
  RESULT
  ============================================================================
  */

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}