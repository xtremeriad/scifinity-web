/* ==========================================================================
   SCIFINITY CENTRALIZED PLACEHOLDERS & OWNER CONFIGURATION
   ==========================================================================
   This is the SINGLE SOURCE OF TRUTH for all institutional details.
   Updated with official verified business information and brand assets.
   ========================================================================== */

export interface VerifiedStudentStory {
  id: string;
  studentName: string;
  program: 'SSC' | 'HSC' | 'Admission Test';
  yearOrBatch: string;
  startingPoint: string;
  challenge: string;
  process: string;
  shift: string;
  outcome: string;
}

export interface VerifiedGuardianQuote {
  id: string;
  guardianName: string;
  studentRelation: string;
  quote: string;
}

export interface OwnerPlaceholders {
  // 1. Center & Location Information
  locations: {
    uttara: {
      address: string;
      cityZip: string;
      fullLocation: string;
      facilitiesStatus: string;
      scheduleDays: string;
      mapEmbedUrl?: string;
      isMapConfigured: boolean;
    };
    patuatuli: {
      address: string;
      cityZip: string;
      fullLocation: string;
      facilitiesStatus: string;
      scheduleDays: string;
      mapEmbedUrl?: string;
      isMapConfigured: boolean;
    };
  };

  // 2. Contact Information
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    facebookUrl: string;
    instagramUrl: string;
    youtubeUrl?: string;
    linkedinUrl?: string;
  };

  // 3. Class Schedules
  schedules: {
    uttaraDays: string;
    patuatuliDays: string;
    dawnTiming: string;
    zenithTiming: string;
    primeTiming: string;
    vesperTiming: string;
    intakeStatus: string;
    isScheduleConfirmed: boolean;
  };

  // 4. Founder Information
  founder: {
    displayName: string;
    degree: string;
    mentoringSpan: string;
    approvedStatement: string;
    portraitImagePath: string;
    signatureImagePath: string;
    isPhotoProvided: boolean;
  };

  // 5. Golden Seat Policy
  goldenSeat: {
    applicationWindow: string;
    continuationCriteria: string[];
    isPolicyConfirmed: boolean;
  };

  // 6. Student Success / Testimonials
  evidence: {
    statusNotice: string;
    status: 'COMING_SOON';
    isEvidenceVerified: boolean;
    stories: VerifiedStudentStory[];
    guardianQuotes: VerifiedGuardianQuote[];
  };

  // 7. Admission Form / Submission
  api: {
    notificationEmail: string;
    admissionEndpoint: string;
    isConfigured: boolean;
    statusNote: string;
  };

  // 8. Bangla Content Approval
  translations: {
    status: 'LATER';
    isFullyApproved: boolean;
  };

  // 9. Privacy Policy
  privacyPolicy: {
    effectiveDate: string;
    lastUpdated: string;
    isApproved: boolean;
  };

  // 10. Terms of Admission
  termsOfAdmission: {
    effectiveDate: string;
    lastUpdated: string;
    isApproved: boolean;
  };

  // 11. Images & Brand Assets
  assets: {
    logoPath: string;
    founderPortraitPath: string;
    founderSignaturePath: string;
    classroomPhotoUttaraPath?: string;
    classroomPhotoPatuatuliPath?: string;
    isAuthenticAssetsSupplied: boolean;
  };
}

export const SCIFINITY_OWNER_DATA: OwnerPlaceholders = {
  // 1. Center & Location Information (Verified)
  locations: {
    uttara: {
      address: 'Sector 9',
      cityZip: 'Dhaka-1230',
      fullLocation: 'Sector 9, Dhaka-1230',
      facilitiesStatus: '[FACILITY PROFILE PENDING CONFIRMATION]',
      scheduleDays: 'Saturday – Monday – Wednesday',
      mapEmbedUrl: undefined,
      isMapConfigured: false
    },
    patuatuli: {
      address: 'Patuatuli Lane, Kotwali',
      cityZip: 'Dhaka-1100',
      fullLocation: 'Patuatuli Lane, Kotwali, Dhaka-1100',
      facilitiesStatus: '[FACILITY PROFILE PENDING CONFIRMATION]',
      scheduleDays: 'Sunday – Tuesday – Thursday',
      mapEmbedUrl: undefined,
      isMapConfigured: false
    }
  },

  // 2. Contact Information (Verified)
  contact: {
    phone: '01711-997941',
    phoneFormatted: '+880 1711-997941',
    whatsapp: '01711-997941',
    whatsappFormatted: '+880 1711-997941',
    email: 'team.scifinity@gmail.com',
    facebookUrl: 'https://www.facebook.com/team.scifinity',
    instagramUrl: 'https://www.instagram.com/scifinity_academe/',
    youtubeUrl: undefined,
    linkedinUrl: undefined
  },

  // 3. Class Schedules (Verified)
  schedules: {
    uttaraDays: 'Saturday – Monday – Wednesday',
    patuatuliDays: 'Sunday – Tuesday – Thursday',
    dawnTiming: '7:00 AM–8:30 AM',
    zenithTiming: '8:30 AM–10:00 AM',
    primeTiming: '4:00 PM–5:30 PM',
    vesperTiming: '5:30 PM–7:00 PM',
    intakeStatus: '[UPCOMING INTAKE DATES NOT YET PROVIDED]',
    isScheduleConfirmed: true
  },

  // 4. Founder Information (Verified)
  founder: {
    displayName: 'RASHED-UZ-ZAMAN NOOR',
    degree: 'BSc in Electrical and Electronic Engineering (EEE), Islamic University of Technology (IUT)',
    mentoringSpan: 'Connected to student mentorship since 2014 (approx. 12 years)',
    approvedStatement: '‘Success is easy to gain, but difficult to hold on to. What truly matters is not reaching the top, but having the discipline, integrity, and dedication to remain there.’',
    portraitImagePath: '/assets/founder.png',
    signatureImagePath: '/assets/founder-signature.png',
    isPhotoProvided: true
  },

  // 5. Golden Seat Policy (Verified)
  goldenSeat: {
    applicationWindow: 'Applications for the Golden Seat will open before the commencement of a new batch and whenever a Golden Seat becomes vacant. SCIFINITY will announce each application opportunity accordingly.',
    continuationCriteria: [
      'Achieve at least 80% marks in their first examination held three months after receiving the seat. The examination may be conducted by the student’s own institution or by SCIFINITY.',
      'Maintain appropriate conduct and discipline throughout the programme.',
      'Any significant behavioural or disciplinary issue may result in withdrawal of the Golden Seat, subject to SCIFINITY’s assessment.'
    ],
    isPolicyConfirmed: true
  },

  // 6. Student Success / Testimonials (Coming Soon)
  evidence: {
    statusNotice: 'In alignment with our core ethical standards, SCIFINITY never fabricates student names, test scores, or photographs. Verified student journeys and guardian testimonials from active cohorts will be published here upon verified consent.',
    status: 'COMING_SOON',
    isEvidenceVerified: false,
    stories: [],
    guardianQuotes: []
  },

  // 7. Admission Form / Submission (Connected to Google Apps Script Endpoint)
  api: {
    notificationEmail: 'team.scifinity@gmail.com',
    admissionEndpoint: 'https://script.google.com/macros/s/AKfycbzHGaVXlmJ4EHVhS_wmBeMQdp5A26e2xj7eeZ_m21v0AK__oXEW06shztBohT0DWsRv/exec',
    isConfigured: true,
    statusNote: 'Connected to Google Apps Script Web App endpoint.'
  },

  // 8. Bangla Content Approval (Later)
  translations: {
    status: 'LATER',
    isFullyApproved: false
  },

  // 9. Privacy Policy (Verified)
  privacyPolicy: {
    effectiveDate: '[Insert Date]',
    lastUpdated: '20-08-2026',
    isApproved: true
  },

  // 10. Terms of Admission (Verified)
  termsOfAdmission: {
    effectiveDate: '[Insert Date]',
    lastUpdated: '20-08-2026',
    isApproved: true
  },

  // 11. Images & Brand Assets (Verified Supplied Files)
  assets: {
    logoPath: '/assets/scifinity-logo.png',
    founderPortraitPath: '/assets/founder.png',
    founderSignaturePath: '/assets/founder-signature.png',
    classroomPhotoUttaraPath: undefined,
    classroomPhotoPatuatuliPath: undefined,
    isAuthenticAssetsSupplied: true
  }
};
