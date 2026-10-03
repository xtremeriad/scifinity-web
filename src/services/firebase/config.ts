/* ============================================================================
   SCIFINITY FIREBASE FOUNDATION
   ============================================================================
   Firebase configuration is supplied through Vite environment variables.
   The web config is client-side configuration; it must still be protected by
   Firebase Authentication and Security Rules.

   Storage is intentionally NOT initialized here yet. The SCIFINITY project is
   currently on Firebase Spark, and Storage will be introduced after the media
   architecture is ready and billing is intentionally upgraded.
   ============================================================================ */

import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const REQUIRED_CONFIG_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
] as const;

export function isFirebaseConfigured(): boolean {
  return REQUIRED_CONFIG_KEYS.every((key) => {
    const value = import.meta.env[key];
    return typeof value === 'string' && value.trim().length > 0;
  });
}

function assertFirebaseConfigured(): void {
  const missing = REQUIRED_CONFIG_KEYS.filter((key) => {
    const value = import.meta.env[key];
    return typeof value !== 'string' || value.trim().length === 0;
  });

  if (missing.length > 0) {
    throw new Error(
      `[SCIFINITY Firebase] Missing environment variables: ${missing.join(', ')}. ` +
      'Copy .env.example to .env.local and add the Firebase Web App configuration.'
    );
  }
}

export function getFirebaseApp(): FirebaseApp {
  assertFirebaseConfigured();
  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

export function getFirebaseAuth(): Auth {
  return getAuth(getFirebaseApp());
}

export function getFirebaseDb(): Firestore {
  return getFirestore(getFirebaseApp());
}
