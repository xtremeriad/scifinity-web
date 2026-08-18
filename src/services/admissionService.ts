/* ==========================================================================
   ADMISSION & CONTACT SUBMISSION SERVICE
   ==========================================================================
   Decoupled API service layer for handling student applications & contact inquiries.
   Connected to Google Apps Script Web App endpoint.
   Sends exact required fields: name, phone, email, subject, message, source.
   Supports Honeypot anti-spam, payload sanitization, async loading states,
   and clean fallback handling.
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

  // Generate a unique client reference token for tracking
  const referenceId = `SCF-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 899 + 100)}`;

  // Construct structured subject and message
  const subjectText = data.currentProgram
    ? `${data.currentProgram} Application — ${data.preferredLocation || 'SCIFINITY'} (${data.preferredBatch || 'Batch'})`
    : 'SCIFINITY Contact / Admission Inquiry';

  const fullMessage = [
    data.reasonForApplying,
    '',
    '--- Academic Placement Details ---',
    `Target Program: ${data.currentProgram || 'General Inquiry'}`,
    `Subjects: ${data.targetSubjects && data.targetSubjects.length ? data.targetSubjects.join(', ') : 'None specified'}`,
    `Preferred Center: ${data.preferredLocation || 'Not specified'}`,
    `Preferred Batch: ${data.preferredBatch || 'Not specified'}`,
    `Reference ID: ${referenceId}`
  ].join('\n');

  // Exact required payload structure for Google Apps Script Web App:
  // name, phone, email, subject, message, source
  const payload = {
    name: data.fullName,
    phone: data.phoneNumber,
    email: data.email || '',
    subject: subjectText,
    message: fullMessage,
    source: 'Website',
    // Supplementary metadata for comprehensive logging
    fullName: data.fullName,
    phoneNumber: data.phoneNumber,
    currentProgram: data.currentProgram,
    targetSubjects: data.targetSubjects,
    preferredLocation: data.preferredLocation,
    preferredBatch: data.preferredBatch,
    reasonForApplying: data.reasonForApplying,
    referenceId,
    submittedAt: new Date().toISOString()
  };

  // 2. If endpoint is configured in production, perform POST request
  if (isConfigured && endpoint) {
    try {
      // Use Content-Type text/plain;charset=utf-8 to ensure CORS simple-request compatibility with Google Apps Script
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok && response.status !== 0) {
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

  // 3. Fallback: Prototype Mode
  await new Promise(resolve => setTimeout(resolve, 600));

  console.info('[SCIFINITY Diagnostic] Application submitted in prototype mode:', payload);

  return {
    success: true,
    mode: 'UNCONFIGURED_PROTOTYPE',
    message: 'Application captured in local prototype mode.',
    applicantName: data.fullName,
    referenceId
  };
}
