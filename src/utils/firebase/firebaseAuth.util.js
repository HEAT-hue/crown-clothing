// jshint esversion:6
/* Import Firebase configuration */
import app from "./firebaseConfig.util";

/* Import functions for Auth with Firebase */
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

/* Initialize Firebase Authentication and get a reference to the service
   keeps track of authentication state of the entire application */
const auth = getAuth(app);

/********************** Google Auth *****************************/
// Instance of the Google auth provider Class:
const GoogleProvider = new GoogleAuthProvider();

// Specify custom parameter to send with the OAuth request
GoogleProvider.setCustomParameters({
  login_hint: "user@example.com",
});

// Export the Google Auth signin popup window to create an authenticated user
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, GoogleProvider);

/********************** User Email and Password Auth *****************************/
// Create an authenticated user to access firestore i.e. sin Up feature
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Create a sign in feature to access firestore
export const signUserInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Listen for auth state change
export const onAuthStateChangedListner = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Create a sign out feature for user
export const signOutUser = async () => {
  return signOut(auth);
};
