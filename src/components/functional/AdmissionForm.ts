/* ==========================================================================
   FUNCTIONAL COMPONENT: ADMISSION APPLICATION FORM
   Source: 14_ADMISSION.md
   ========================================================================== */

import { ADMISSION_CONTENT } from '../../content/en/admission.ts';
import { SCIFINITY_OWNER_DATA } from '../../content/placeholders.ts';

export function renderAdmissionForm(): string {
  const specs = ADMISSION_CONTENT.formSpecs;
  const isConfigured = SCIFINITY_OWNER_DATA.api.isConfigured;

  return `
    <div class="card" style="padding: var(--space-8); box-shadow: var(--shadow-md); background: #FFFFFF; border: 1px solid var(--color-border);" id="admissionFormContainer">
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <span class="badge badge-primary">Admission Application</span>
          ${isConfigured 
            ? '<span class="status-tag confirmed">API LIVE</span>' 
            : '<span class="status-tag placeholder" title="Submission endpoint pending owner backend configuration">[SUBMISSION ENDPOINT PENDING]</span>'
          }
        </div>
        <h3 class="text-h3" style="font-size: 24px; margin-top: 8px;">Apply for SCIFINITY Batch Placement</h3>
        <p class="text-body text-muted" style="font-size: 15px;">
          Small batches of 15 students ensure rigorous, personalized mentorship. Please complete all fields with sincerity.
        </p>
      </div>

      <form id="scifinityAdmissionForm" novalidate>
        <!-- Anti-Spam Honeypot Field (Hidden from humans) -->
        <div style="display: none !important;" aria-hidden="true">
          <label for="_website_hp">Leave this empty</label>
          <input type="text" id="_website_hp" name="_website_hp" tabindex="-1" autocomplete="off">
        </div>

        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName" class="form-label">
            Full Name <span class="required-indicator">*</span>
          </label>
          <input type="text" id="fullName" name="fullName" class="form-input" placeholder="e.g. Tanvir Ahmed" required autocomplete="name">
          <div class="form-error-msg" id="fullNameError" style="display: none;"></div>
        </div>

        <!-- Academic Program -->
        <div class="form-group">
          <label for="currentProgram" class="form-label">
            Target Academic Program <span class="required-indicator">*</span>
          </label>
          <select id="currentProgram" name="currentProgram" class="form-select" required>
            <option value="">-- Select Target Program --</option>
            ${specs.programs.map(p => `<option value="${p.value}">${p.label}</option>`).join('')}
          </select>
          <div class="form-error-msg" id="currentProgramError" style="display: none;"></div>
        </div>

        <!-- Target Subjects (Checkbox Group) -->
        <div class="form-group">
          <label class="form-label">
            Target Subjects of Focus <span class="required-indicator">*</span>
          </label>
          <div class="grid grid-2 gap-2 mt-1">
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Higher Mathematics" checked> Higher Mathematics
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Physics" checked> Physics
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Chemistry" checked> Chemistry
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="General Mathematics"> General Mathematics (SSC only)
            </label>
          </div>
        </div>

        <!-- Phone Number -->
        <div class="form-group">
          <label for="phoneNumber" class="form-label">
            Contact Phone Number <span class="required-indicator">*</span>
          </label>
          <input type="tel" id="phoneNumber" name="phoneNumber" class="form-input" placeholder="e.g. +880 1712 345678" required autocomplete="tel">
          <div class="form-error-msg" id="phoneNumberError" style="display: none;"></div>
        </div>

        <div class="grid grid-2 gap-4">
          <!-- Preferred Location -->
          <div class="form-group">
            <label for="preferredLocation" class="form-label">
              Preferred Center <span class="required-indicator">*</span>
            </label>
            <select id="preferredLocation" name="preferredLocation" class="form-select" required>
              <option value="">-- Select Center --</option>
              ${specs.locations.map(l => `<option value="${l.value}">${l.label}</option>`).join('')}
            </select>
            <div class="form-error-msg" id="preferredLocationError" style="display: none;"></div>
          </div>

          <!-- Preferred Batch -->
          <div class="form-group">
            <label for="preferredBatch" class="form-label">
              Preferred Batch <span class="required-indicator">*</span>
            </label>
            <select id="preferredBatch" name="preferredBatch" class="form-select" required>
              <option value="">-- Select Batch --</option>
              ${specs.batches.map(b => `<option value="${b.value}">${b.label}</option>`).join('')}
            </select>
            <div class="form-error-msg" id="preferredBatchError" style="display: none;"></div>
          </div>
        </div>

        <!-- Reason for Applying -->
        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="reasonForApplying" class="form-label">
              Why do you want to study at SCIFINITY? <span class="required-indicator">*</span>
            </label>
            <span class="text-small text-muted" id="charCount">0 / 250 min</span>
          </div>
          <textarea id="reasonForApplying" name="reasonForApplying" rows="4" class="form-textarea" placeholder="Tell us about your learning goals, what you find difficult in current study routines, and why you want conceptual mentorship..." required></textarea>
          <div class="form-error-msg" id="reasonForApplyingError" style="display: none;"></div>
          <p class="form-help-text">We read every statement carefully to understand your mindset and motivation.</p>
        </div>

        <!-- Technical Endpoint Status Notice Box -->
        <div class="p-3 mb-6" style="background: var(--color-surface-muted); border: 1px dashed var(--color-border); border-radius: var(--radius-sm); font-size: 13px; color: var(--color-text-muted);">
          <strong>Submission Endpoint:</strong> ${isConfigured ? 'Connected to live production endpoint.' : '<span class="status-tag placeholder">[PENDING OWNER BACKEND ENDPOINT CONFIGURATION]</span>'}
          <p class="text-small text-muted mt-1">Form inputs are strictly validated on client and prepared for webhook/API integration.</p>
        </div>

        <button type="submit" class="btn btn-primary btn-lg w-full" id="submitBtn">
          <span id="btnSpinner" style="display: none; width: 16px; height: 16px; border: 2px solid #FFFFFF; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 8px;"></span>
          <span id="btnText">Submit Application for Evaluation</span>
        </button>
      </form>

      <!-- Success State Container -->
      <div id="formSuccessState" style="display: none; text-align: center; padding: var(--space-6);">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--color-success-bg); color: var(--color-success); display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: var(--space-4);">
          ✓
        </div>
        <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">Application Validation Complete</h3>
        <p class="text-body text-muted mb-4" id="successApplicantText">
          Thank you. Your application details have been validated.
        </p>

        <div class="p-3 mb-6" style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); font-size: 13px; color: #166534; text-align: left; max-width: 480px; margin-left: auto; margin-right: auto;">
          <div class="flex items-center justify-between mb-1">
            <strong>Application Reference:</strong>
            <code id="successRefCode" style="font-weight: 700; background: #DCFCE7; padding: 2px 6px; border-radius: 4px;">SCF-DEMO</code>
          </div>
          <p class="text-small" style="margin-top: 4px; color: #15803D;" id="successModeNotice">
            <strong>System Status:</strong> ${isConfigured ? 'Application submitted to live admissions server.' : 'Validated in test prototype mode. Live submission endpoint will be activated once owner configures the backend destination.'}
          </p>
        </div>

        <button type="button" class="btn btn-secondary btn-sm" id="resetFormBtn">
          Submit Another Application
        </button>
      </div>
    </div>

    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `;
}
