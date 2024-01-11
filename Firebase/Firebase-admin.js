import { apps, initializeApp, credential as _credential, firestore } from "firebase-admin";

if (!apps.length) {
  initializeApp({
    credential: _credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      project_id: process.env.FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firestore();


