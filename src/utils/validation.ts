/* ==========================================================================
   FORM VALIDATION UTILITY
   ========================================================================== */

import type { AdmissionFormData } from '../content/types.ts';

export interface ValidationErrors {
  fullName?: string;
  currentProgram?: string;
  phoneNumber?: string;
  preferredLocation?: string;
  preferredBatch?: string;
  reasonForApplying?: string;
}

export function validateAdmissionForm(data: AdmissionFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.currentProgram) {
    errors.currentProgram = 'Please select your target academic program.';
  }

  const rawPhone = data.phoneNumber ? data.phoneNumber.trim() : '';
  const digitsOnly = rawPhone.replace(/\D/g, '');
  const isValidPhonePattern = /^[+]?[0-9\s\-().]{7,20}$/.test(rawPhone) && digitsOnly.length >= 7 && digitsOnly.length <= 15;

  if (!rawPhone || !isValidPhonePattern) {
    errors.phoneNumber = 'Please enter a valid contact phone number (e.g. +880 1712 345678 or 01712345678).';
  }

  if (!data.preferredLocation) {
    errors.preferredLocation = 'Please select a preferred center (Uttara or Patuatuli).';
  }

  if (!data.preferredBatch) {
    errors.preferredBatch = 'Please select your preferred batch.';
  }

  if (!data.reasonForApplying || data.reasonForApplying.trim().length < 15) {
    errors.reasonForApplying = 'Please share your reason for applying (minimum 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
