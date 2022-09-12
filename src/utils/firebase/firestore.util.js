// jshint esversion:6
/* Import functions to enable usage of Firestore service  */
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Initialize firestore and get a db instance
const fireDB = getFirestore();

// Add | Create collection and user document
export const addCollectionAndDocument = async (
  collectionKey,
  objectDataToAdd
) => {
  // Get or create a collection ref to store a collection
  const collectionRef = collection(fireDB, collectionKey);

  // Create a batch instance to be able write objects to DB
  const batch = writeBatch(fireDB);

  // Map through theobject data to set document
  objectDataToAdd.forEach((dataObject) => {
    // Get | Create a doc ref to store data
    const docRef = doc(collectionRef, dataObject.title.toLowerCase());

    // Set a collection
    batch.set(docRef, dataObject);
  });

  // Await commit. Fire batches, clean up process
  await batch.commit();
  console.log("Done uploading to firebase");
};

export const getCategoriesAndDocuments = async () => {
  // Get | create collection reference
  const collectionRef = collection(fireDB, "Categories");

  // Build a query with the collection ref
  const q = query(collectionRef);

  // Get snapshot of the db using already built-in query
  // returns an array of documents
  const querysnapshot = await getDocs(q);

  // Create a map of objects from query snapshot created
  const categoryMap = querysnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

// Create doc with authenticated user
export const createUserDocumentFromAuth = async (userAuth) => {
  // If no auth user is passed, exit - access denied
  if (!userAuth) return;

  // create a doc reference or instance for authenticated user
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
