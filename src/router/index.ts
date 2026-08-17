/* ==========================================================================
   SCIFINITY CLIENT ROUTER
   Maps all 13 canonical routes + legal views with SEO & lifecycle hooks
   ========================================================================== */

import { renderHeader } from '../components/global/Header.ts';
import { renderMobileNav } from '../components/global/MobileNav.ts';
import { renderFooter } from '../components/global/Footer.ts';

import { renderHomePage } from '../pages/HomePage.ts';
import { renderWhyScifinityPage } from '../pages/WhyScifinityPage.ts';
import { renderSystemPage } from '../pages/SystemPage.ts';
import { renderProgramsPage } from '../pages/ProgramsPage.ts';
import { renderSscProgramPage } from '../pages/SscProgramPage.ts';
import { renderHscProgramPage } from '../pages/HscProgramPage.ts';
import { renderAdmissionProgramPage } from '../pages/AdmissionProgramPage.ts';
import { renderFounderPage } from '../pages/FounderPage.ts';
import { renderSuccessPage } from '../pages/SuccessPage.ts';
import { renderGoldenSeatPage } from '../pages/GoldenSeatPage.ts';
import { renderVaultPage } from '../pages/VaultPage.ts';
import { renderLocationsPage } from '../pages/LocationsPage.ts';
import { renderAdmissionPage } from '../pages/AdmissionPage.ts';
import { renderPrivacyPage } from '../pages/PrivacyPage.ts';
import { renderTermsPage } from '../pages/TermsPage.ts';

import { updatePageSEO } from '../utils/seo.ts';
import { validateAdmissionForm } from '../utils/validation.ts';
import { submitAdmissionApplication } from '../services/admissionService.ts';
import { store } from '../state/store.ts';

interface RouteDefinition {
  title: string;
  description: string;
  render: () => string;
}

const ROUTE_MAP: Record<string, RouteDefinition> = {
  '/': {
    title: 'SCIFINITY — Where Learning Becomes Understanding',
    description: 'SCIFINITY is a mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging.',
    render: renderHomePage
  },
  '/why-scifinity': {
    title: 'Why SCIFINITY — Educational Philosophy & Origin',
    description: 'Learn why SCIFINITY was founded in 2014 to replace rote-learning routines with first-principles comprehension and direct mentorship.',
    render: renderWhyScifinityPage
  },
  '/system': {
    title: 'Our System — Student-Centered Learning & Debugging',
    description: 'Discover the 9-stage learning loop, 10-Minute Bridge, semicircular classroom architecture, and error debugging pedagogy at SCIFINITY.',
    render: renderSystemPage
  },
  '/programs': {
    title: 'Academic Programs — SSC, HSC & Admission Test',
    description: 'Structured small-batch preparation (max 15 students) in General Mathematics, Higher Mathematics, Physics, and Chemistry.',
    render: renderProgramsPage
  },
  '/programs/ssc': {
    title: 'SSC Program (Classes 9–10) — SCIFINITY',
    description: 'Build robust conceptual foundations behind the SSC syllabus instead of memorizing formulas blindly.',
    render: renderSscProgramPage
  },
  '/programs/hsc': {
    title: 'HSC Program (Classes 11–12) — SCIFINITY',
    description: 'Rigorous Higher Math, Physics, and Chemistry for HSC board excellence and early university admission integration.',
    render: renderHscProgramPage
  },
  '/programs/admission': {
    title: 'Admission Test Program — SCIFINITY',
    description: 'Engineering university and university A-Unit admission preparation grounded in first-principles analytical intuition.',
    render: renderAdmissionProgramPage
  },
  '/founder': {
    title: 'Founder & Mentor — Leadership & Teaching Background',
    description: 'Meet the founder: BSc in EEE from IUT, mentoring Dhaka students since 2014 across core physics and mathematics.',
    render: renderFounderPage
  },
  '/success': {
    title: 'Success & Stories — Evidence & Mastery Outcomes',
    description: 'How SCIFINITY defines genuine student mastery beyond raw test scores through understanding, diagnosis, and long-term independence.',
    render: renderSuccessPage
  },
  '/golden-seat': {
    title: 'The Golden Seat — Tuition Support Opportunity',
    description: 'Tuition support for one deserving, determined student in every batch through direct application or peer nomination.',
    render: renderGoldenSeatPage
  },
  '/vault': {
    title: 'The Vault — Free Study, Exam, Physics & Math Tips',
    description: 'Free public repository of analytical frameworks, examination strategies, and problem-solving tips for secondary and higher-secondary learners.',
    render: renderVaultPage
  },
  '/locations': {
    title: 'Locations — Uttara & Patuatuli Centers (Dhaka)',
    description: 'Explore SCIFINITY’s dual Dhaka hubs operating on shared alternate-day schedules with strict 15-student batch limits.',
    render: renderLocationsPage
  },
  '/admission': {
    title: 'Admission Application — Apply for SCIFINITY Cohorts',
    description: 'Apply for a selective 15-student batch at our Uttara or Patuatuli centers. Mindset-driven application and evaluation.',
    render: renderAdmissionPage
  },
  '/privacy': {
    title: 'Privacy Policy — SCIFINITY',
    description: 'Information management and student data privacy practices at SCIFINITY.',
    render: renderPrivacyPage
  },
  '/terms': {
    title: 'Terms of Admission — SCIFINITY',
    description: 'Academic expectations, batch attendance, and code of conduct.',
    render: renderTermsPage
  }
};

export class Router {
  private appElement: HTMLElement;

  constructor(appElement: HTMLElement) {
    this.appElement = appElement;
    this.init();
  }

  private init() {
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('click', (e) => this.handleLinkClick(e));

    // Keyboard accessibility: Close mobile drawer on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && store.isMobileNavOpen) {
        store.setMobileNavOpen(false);
        const drawer = document.getElementById('mobileDrawer');
        if (drawer) drawer.classList.remove('open');
      }
    });

    // Subscribe to language changes to re-render
    store.subscribe(() => {
      this.render();
    });

    this.handleRoute();
  }

  public navigate(path: string) {
    if (window.location.pathname + window.location.search !== path) {
      window.history.pushState({}, '', path);
      this.handleRoute();
    }
  }

  private handleLinkClick(e: MouseEvent) {
    const target = (e.target as HTMLElement).closest('[data-route], [data-nav-link]') as HTMLAnchorElement | null;
    if (target && target.getAttribute('href') && !target.getAttribute('href')?.startsWith('http')) {
      e.preventDefault();
      const route = target.getAttribute('data-route') || target.getAttribute('href') || '/';
      
      // Close mobile drawer if open
      if (store.isMobileNavOpen) {
        store.setMobileNavOpen(false);
      }

      this.navigate(route);
    }
  }

  private handleRoute() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.render();
  }

  private render() {
    const currentPath = window.location.pathname || '/';
    const routeDef = ROUTE_MAP[currentPath] || ROUTE_MAP['/'];

    updatePageSEO(routeDef.title, routeDef.description);

    this.appElement.innerHTML = `
      ${renderHeader(currentPath)}
      ${renderMobileNav(currentPath)}
      ${routeDef.render()}
      ${renderFooter()}
    `;

    this.attachEventListeners();
  }

  private attachEventListeners() {
    // Language buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = (e.currentTarget as HTMLElement).getAttribute('data-lang') as 'en' | 'bn';
        store.setLanguage(lang);
      });
    });

    // Mobile nav toggle & close
    const mobileToggle = document.getElementById('mobileNavToggle');
    const mobileClose = document.getElementById('mobileDrawerClose');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        store.toggleMobileNav();
        if (mobileDrawer) {
          mobileDrawer.classList.toggle('open', store.isMobileNavOpen);
        }
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        store.setMobileNavOpen(false);
        if (mobileDrawer) {
          mobileDrawer.classList.remove('open');
        }
      });
    }

    // Close mobile drawer when clicking backdrop outside content
    if (mobileDrawer) {
      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
          store.setMobileNavOpen(false);
          mobileDrawer.classList.remove('open');
        }
      });
    }

    // Interactive step card click highlight for Learning System Flow
    const flowCards = document.querySelectorAll('.flow-step-card');
    flowCards.forEach(card => {
      card.addEventListener('click', () => {
        flowCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });

    // Vault Filter buttons
    const filterBtns = document.querySelectorAll('.vault-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const cat = target.getAttribute('data-category');

        filterBtns.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        target.classList.remove('btn-secondary');
        target.classList.add('btn-primary');

        const cards = document.querySelectorAll('#vaultGrid .card');
        cards.forEach(c => {
          const cardEl = c as HTMLElement;
          const cardCat = cardEl.getAttribute('data-category');
          if (cat === 'All Resources' || cardCat === cat) {
            cardEl.style.display = 'flex';
          } else {
            cardEl.style.display = 'none';
          }
        });
      });
    });

    // Admission Form: Pre-populate from URL query parameters & validate
    const form = document.getElementById('scifinityAdmissionForm') as HTMLFormElement | null;
    if (form) {
      const urlParams = new URLSearchParams(window.location.search);
      const progParam = urlParams.get('prog');
      const locParam = urlParams.get('loc');
      const typeParam = urlParams.get('type');

      const programSelect = document.getElementById('currentProgram') as HTMLSelectElement | null;
      const locationSelect = document.getElementById('preferredLocation') as HTMLSelectElement | null;
      const reasonTextarea = document.getElementById('reasonForApplying') as HTMLTextAreaElement | null;

      if (progParam && programSelect) {
        if (progParam === 'ssc') programSelect.value = 'SSC';
        else if (progParam === 'hsc') programSelect.value = 'HSC';
        else if (progParam === 'admission') programSelect.value = 'Admission Test';
      }

      if (locParam && locationSelect) {
        if (locParam === 'uttara') locationSelect.value = 'Uttara';
        else if (locParam === 'patuatuli') locationSelect.value = 'Patuatuli';
      }

      if (typeParam === 'golden-seat' && reasonTextarea) {
        reasonTextarea.placeholder = 'Please explain your financial context and personal passion for learning (Golden Seat Application)...';
      } else if (typeParam === 'nomination' && reasonTextarea) {
        reasonTextarea.placeholder = 'Please specify the name of the peer you are nominating, why they deserve the Golden Seat, and their academic diligence...';
      }

      const reasonInput = document.getElementById('reasonForApplying') as HTMLTextAreaElement | null;
      const charCount = document.getElementById('charCount');

      if (reasonInput && charCount) {
        reasonInput.addEventListener('input', () => {
          const len = reasonInput.value.length;
          charCount.textContent = `${len} / 250 min`;
          charCount.style.color = len >= 25 ? 'var(--color-success)' : 'var(--color-text-muted)';
        });
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const targetSubjects = formData.getAll('targetSubjects') as string[];
        const honeypot = (formData.get('_website_hp') as string) || '';

        const payload = {
          fullName: (formData.get('fullName') as string) || '',
          currentProgram: (formData.get('currentProgram') as any) || '',
          targetSubjects,
          phoneNumber: (formData.get('phoneNumber') as string) || '',
          preferredLocation: (formData.get('preferredLocation') as any) || '',
          preferredBatch: (formData.get('preferredBatch') as any) || '',
          reasonForApplying: (formData.get('reasonForApplying') as string) || ''
        };

        const { isValid, errors } = validateAdmissionForm(payload);

        // Reset errors
        ['fullName', 'currentProgram', 'phoneNumber', 'preferredLocation', 'preferredBatch', 'reasonForApplying'].forEach(field => {
          const errorEl = document.getElementById(`${field}Error`);
          const inputEl = document.getElementById(field);
          if (errorEl) errorEl.style.display = 'none';
          if (inputEl) inputEl.classList.remove('is-invalid');
        });

        if (!isValid) {
          Object.entries(errors).forEach(([field, msg]) => {
            const errorEl = document.getElementById(`${field}Error`);
            const inputEl = document.getElementById(field);
            if (errorEl && msg) {
              errorEl.textContent = msg;
              errorEl.style.display = 'block';
            }
            if (inputEl) {
              inputEl.classList.add('is-invalid');
            }
          });
          return;
        }

        // Show Loading State on Button
        const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement | null;
        const btnSpinner = document.getElementById('btnSpinner');
        const btnText = document.getElementById('btnText');

        if (submitBtn && btnSpinner && btnText) {
          submitBtn.disabled = true;
          btnSpinner.style.display = 'inline-block';
          btnText.textContent = 'Submitting Application...';
        }

        try {
          const result = await submitAdmissionApplication(payload, honeypot);

          const formContainer = document.getElementById('admissionFormContainer');
          const successState = document.getElementById('formSuccessState');
          const refCodeEl = document.getElementById('successRefCode');
          const applicantTextEl = document.getElementById('successApplicantText');

          if (form && successState && formContainer) {
            form.style.display = 'none';
            successState.style.display = 'block';

            if (refCodeEl && result.referenceId) {
              refCodeEl.textContent = result.referenceId;
            }
            if (applicantTextEl) {
              applicantTextEl.textContent = `Thank you, ${result.applicantName || 'Applicant'}. Your application has been logged.`;
            }

            const resetBtn = document.getElementById('resetFormBtn');
            if (resetBtn) {
              resetBtn.addEventListener('click', () => {
                form.reset();
                if (charCount) charCount.textContent = '0 / 250 min';
                form.style.display = 'block';
                successState.style.display = 'none';
              });
            }
          }
        } finally {
          if (submitBtn && btnSpinner && btnText) {
            submitBtn.disabled = false;
            btnSpinner.style.display = 'none';
            btnText.textContent = 'Submit Application for Evaluation';
          }
        }
      });
    }
  }
}
