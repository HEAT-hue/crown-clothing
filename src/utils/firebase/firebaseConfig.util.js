// jshint esversion:6
/* Import initApp to init firebase */
import { initializeApp } from "firebase/app";

/* Firebase App project configuration */
const firebaseConfig = {
  apiKey: "AIzaSyAJ9ZF8WU9QRQ7cr3RcOT_bZXSkTfIT-pA",
  authDomain: "crown-clothing-fdcaf.firebaseapp.com",
  projectId: "crown-clothing-fdcaf",
  storageBucket: "crown-clothing-fdcaf.appspot.com",
  messagingSenderId: "12854540090",
  appId: "1:12854540090:web:7dfda244f0675b97258203",
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);

/* Export App default */
export default app;
