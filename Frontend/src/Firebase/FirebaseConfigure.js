import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC-ctkf-asnJt79rRClAk6W9B7Ew87lOc",
  authDomain: "news-firebase-5d5dd.firebaseapp.com",
  projectId: "news-firebase-5d5dd",
  storageBucket: "news-firebase-5d5dd.appspot.com",
  messagingSenderId: "139908855805",
  appId: "1:139908855805:web:f39d88edc4d3d1dd75cb94",
  measurementId: "G-99MMRWBLRV"
};

const app = initializeApp(firebaseConfig);

export const database = getAuth(app);