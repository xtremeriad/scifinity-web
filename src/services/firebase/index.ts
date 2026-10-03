export {
  getFirebaseApp,
  getFirebaseAuth,
  getFirebaseDb,
  isFirebaseConfigured,
} from './config.ts';

export {
  observeAuthState,
  sendAdminPasswordReset,
  signInWithPassword,
  signOutCurrentUser,
} from './auth.ts';

export {
  getCollection,
  getCollectionDocuments,
  getDocument,
} from './firestore.ts';
