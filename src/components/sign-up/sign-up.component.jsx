// jshint esversion:6
import { useRef } from "react";

/* Import Firebase utils to enable authentication */
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseAuth.util";

import { createUserDocumentFromAuth } from "../../utils/firebase/firestore.util";

/* Import styles for this component */
import Button from "../button/button.component";
import {
  FormContainer,
  FormInput,
  TextSm,
} from "../sign-in/sign-in.styles";
import { H2, ButtonContainer } from "./sign-up.styles";

function SignUp() {
  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  /* Sign in with Google */
  const signUpWithGoogle = async () => {
    /* Auth state lsitens for signed in user to create user doc */
    await signInWithGooglePopup();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const displayName = displayNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) {
      alert("Password do not match!");
      return;
    }

    console.log("Response from create user with email and password");

    try {
      /* We need to set user dispay name gotten from input field */
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // Set the user display name field
      user.displayName = displayName;
      console.log(user);

      const userDocRef = await createUserDocumentFromAuth(user);
      console.log(userDocRef);

      // Reset input fields
      event.target.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("An error occured");
      console.log(error);
    }
  }

  return (
    <FormContainer
      onSubmit={(e) => {
        console.log("Form submitted");
        handleSubmit(e);
      }}
    >
      <H2>Sign up for free today</H2>
      <p>
        Use your <strong>work email</strong> to sign up
      </p>
      <FormInput
        type="text"
        placeholder="Display name"
        ref={displayNameRef}
        required
      />
      <FormInput
        type="email"
        placeholder="Work email"
        ref={emailRef}
        required
      />
      <FormInput
        type="password"
        placeholder="Password"
        ref={passwordRef}
        required
      />
      <FormInput
        type="password"
        placeholder="Password confirmation"
        ref={passwordConfirmRef}
        required
      />

      <ButtonContainer>
        <Button children="Sign UP" type="submit" />
      </ButtonContainer>

      <p>
        <TextSm>or sign up wih Google</TextSm>
      </p>
      <Button
        children="Sign Up with Google"
        buttonType="google"
        onClick={signUpWithGoogle}
      />
    </FormContainer>
  );
}

export default SignUp;
