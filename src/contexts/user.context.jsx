// jshint esversion:6
import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListner } from "../utils/firebase/firebaseAuth.util";

import { createUserDocumentFromAuth } from "../utils/firebase/firestore.util";

// The create a Provider and access the value prop of the provider
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// To allow wrapped components access the Provider value via it's context
// This is a React Component
export const UserProvider = ({ children }) => {
  /* Create state you want to export globally to different components*/
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  /* This mounts a listner across all components */
  /* This causes a change of state, effect hook required to prevent infinite re-rendering */
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner(async (user) => {
      /* Create or return snapshot of user doc*/
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      console.log("From on auth state change");
      console.log(user);
      /* Set state re-renders component */
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
