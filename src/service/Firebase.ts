import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_7z5_nbczLUmSkWRw4lljIgnoI9sEhHI",
  authDomain: "job-app-1b627.firebaseapp.com",
  projectId: "job-app-1b627",
  storageBucket: "job-app-1b627.appspot.com",
  messagingSenderId: "352373488668",
  appId: "1:352373488668:web:14cffc0731e4c3610573d9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.log(e);
  }
};

export const logout = () => {
	signOut(auth);
}
