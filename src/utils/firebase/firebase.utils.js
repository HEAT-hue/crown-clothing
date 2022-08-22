// jshint esversion:6
/* Import initApp to init firebase */
import { initializeApp } from "firebase/app";

/* Import functions for Google Auth */
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

/* Import functions to enable usage of Firestore service  */
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

/* Initialize Firebase Authentication and get a reference to the service
   keeps track of authentication state of the entire application */
const auth = getAuth();

// Instance of the Google provider object:
const Googleprovider = new GoogleAuthProvider(app);

// Specify custom parameter to send with the OAuth request
Googleprovider.setCustomParameters({
  login_hint: "user@example.com",
});

// Export the signin popup window to create an authenticated user
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);

// Initialize firestore
const fireDB = getFirestore();

// Create doc with authenticated user
export const createUserDocumentFromAuth = async (userAuth) => {
  // If no auth user is passed, exit - access denied
  if (!userAuth) return;

  // create a doc reference or instance for each authenticated user
  const userDocRef = doc(fireDB, "users", userAuth.uid);

  // Get a snapshot of the user document
  const userSnapshot = await getDoc(userDocRef);

  // If user doc does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // Create / Set the document with the data from useAuth
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      // if (error.code = )
      console.log(`Error creating user doc: ${error}`);
    }
  }

  // If user doc exists, return it
  return userDocRef;
};

// Create an authenticated user to access firestore
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
