import { GoogleAuthProvider } from "firebase/auth";

export const API_URL = "http://dev3.dansmultipro.co.id/api/recruitment";

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD_7z5_nbczLUmSkWRw4lljIgnoI9sEhHI",
  authDomain: "job-app-1b627.firebaseapp.com",
  projectId: "job-app-1b627",
  storageBucket: "job-app-1b627.appspot.com",
  messagingSenderId: "352373488668",
  appId: "1:352373488668:web:14cffc0731e4c3610573d9",
};

export const UI_CONFIG = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/list",
  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};
