/* ============================================================================
   SCIFINITY FIRESTORE ACCESS LAYER
   ============================================================================
   Pages and UI components should call domain services rather than importing
   the Firestore SDK directly. This keeps Firebase replaceable and makes the
   future AI/admin workflows easier to govern.
   ============================================================================ */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  type CollectionReference,
  type DocumentData,
} from 'firebase/firestore';
import { getFirebaseDb } from './config.ts';
export function getFirestoreDb() {
  return getFirebaseDb();
}

export function getCollection<T extends DocumentData>(name: string): CollectionReference<T> {
  return collection(getFirebaseDb(), name) as CollectionReference<T>;
}

export async function getDocument<T extends DocumentData>(
  collectionName: string,
  documentId: string,
): Promise<(T & { id: string }) | null> {
  const snapshot = await getDoc(doc(getFirebaseDb(), collectionName, documentId));

  if (!snapshot.exists()) {
    return null;
  }

  return { id: snapshot.id, ...(snapshot.data() as T) };
}

export async function getCollectionDocuments<T extends DocumentData>(
  collectionName: string,
): Promise<Array<T & { id: string }>> {
  const snapshot = await getDocs(getCollection<T>(collectionName));
  return snapshot.docs.map((item) => ({ id: item.id, ...(item.data() as T) }));
}
