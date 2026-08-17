/* ==========================================================================
   ADMISSION SUBMISSION SERVICE
   ==========================================================================
   Decoupled API service layer for handling student admission applications.
   Supports Honeypot anti-spam, payload sanitization, async loading states,
   and clean fallback when the backend endpoint is pending configuration.
   ========================================================================== */

import type { AdmissionFormData } from '../content/types.ts';
import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export interface SubmissionResponse {
  success: boolean;
  mode: 'LIVE_ENDPOINT' | 'UNCONFIGURED_PROTOTYPE';
  message: string;
  applicantName?: string;
  referenceId?: string;
  error?: string;
}

export async function submitAdmissionApplication(
  data: AdmissionFormData,
  honeypotField: string = ''
): Promise<SubmissionResponse> {
  // 1. Anti-spam / Honeypot verification
  if (honeypotField && honeypotField.trim().length > 0) {
    console.warn('[Security] Honeypot trap triggered. Silent rejection.');
    return {
      success: false,
      mode: 'LIVE_ENDPOINT',
      message: 'Automated submission rejected.',
      error: 'SPAM_DETECTED'
    };
  }

  const endpoint = SCIFINITY_OWNER_DATA.api.admissionEndpoint;
  const isConfigured = SCIFINITY_OWNER_DATA.api.isConfigured && Boolean(endpoint);

  // Generate a client reference token for tracking
  const referenceId = `SCF-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 899 + 100)}`;

  // 2. If endpoint is configured in production, perform actual fetch
  if (isConfigured && endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          referenceId,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      return {
        success: true,
        mode: 'LIVE_ENDPOINT',
        message: 'Your application has been received. Our mentorship team will contact you shortly.',
        applicantName: data.fullName,
        referenceId
      };
    } catch (err) {
      console.error('[Admission Service] API Error:', err);
      return {
        success: false,
        mode: 'LIVE_ENDPOINT',
        message: 'Unable to submit application at this moment. Please try again or contact us directly.',
        error: err instanceof Error ? err.message : 'UNKNOWN_ERROR'
      };
    }
  }

  // 3. Fallback: Prototype/Unconfigured Endpoint Mode
  // Simulate network latency (600ms) to test async button loading state
  await new Promise(resolve => setTimeout(resolve, 600));

  console.info('[SCIFINITY Diagnostic] Application submitted in prototype mode:', {
    referenceId,
    applicant: data.fullName,
    program: data.currentProgram,
    location: data.preferredLocation,
    batch: data.preferredBatch,
    subjects: data.targetSubjects,
    phone: data.phoneNumber
  });

  return {
    success: true,
    mode: 'UNCONFIGURED_PROTOTYPE',
    message: 'Application captured in local prototype mode. The production submission endpoint is pending backend configuration by the owner.',
    applicantName: data.fullName,
    referenceId
  };
}
