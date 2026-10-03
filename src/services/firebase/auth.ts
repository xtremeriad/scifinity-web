/* ============================================================================
   SCIFINITY AUTHENTICATION SERVICE
   ============================================================================
   V1 authentication is intentionally limited to email/password for the owner
   and future authorized staff. Public visitors do not use this service.
   ============================================================================ */

import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth } from './config.ts';

export async function signInWithPassword(email: string, password: string): Promise<User> {
  const auth = getFirebaseAuth();
  const credentials = await signInWithEmailAndPassword(auth, email.trim(), password);
  return credentials.user;
}

export async function signOutCurrentUser(): Promise<void> {
  await signOut(getFirebaseAuth());
}

export async function sendAdminPasswordReset(email: string): Promise<void> {
  await sendPasswordResetEmail(getFirebaseAuth(), email.trim());
}

export function observeAuthState(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(getFirebaseAuth(), callback);
}

export function getCurrentUser(): User | null {
  return getFirebaseAuth().currentUser;
}

export function waitForAuthReady(): Promise<User | null> {
  const auth = getFirebaseAuth();

  if (auth.currentUser) {
    return Promise.resolve(auth.currentUser);
  }

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}