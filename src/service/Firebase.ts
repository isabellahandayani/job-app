import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_CONFIG } from "../const";

initializeApp(FIREBASE_CONFIG);

export const auth = getAuth();