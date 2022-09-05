// jshint esversion:6
/* Import functions to enable usage of Firestore service  */
import { AuthErrorCodes } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
      throw new Error("Couldn.t save user");
    }
  }

  // If user doc exists, return a snapshot of it's document
  return userDocRef;
};
