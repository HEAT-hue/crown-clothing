// jshint esversion:6
/* React components */
import { useRef } from "react";
import { Link } from "react-router-dom";

/* Firebase utils */
/* Firebase Auth methods */
import {
  signInWithGooglePopup,
  signUserInWithEmailAndPassword,
} from "../../utils/firebase/firebaseAuth.util";

/* Style sheets */
import Button from "../button/button.component";

/* Styled Components */
import {
  FormContainer,
  FormInput,
  TextSm,
  ButtonContainer,
  TextLg,
} from "./sign-in.styles";

function SignIn() {
  /* Define your refs */
  const emailRef = useRef();
  const passwordRef = useRef();

  /* Sign in with Google */
  const SignInWithGoogle = async () => {
    /* Auth state captures signed in user automatically */
    await signInWithGooglePopup();
  };

  async function handleSubmit(e) {
    /* Prevent default refresh of page after form submit */
    e.preventDefault();

    /* Get current input values */
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      /* Auth state listens for signed in user automatically */
      await signUserInWithEmailAndPassword(email, password);

      /* Clear input form fields */
      e.target.reset();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User account not found. Sign up to create one!");
          break;
        case "auth/wrong-password":
          alert("Wrong password!");
          break;
        default:
          console.log("An error occured");
          console.log(error);
          break;
      }
    }
  }

  return (
    <FormContainer
      onSubmit={(e) => {
        console.log("Form submitted");
        handleSubmit(e);
      }}
    >
      <ButtonContainer>
        <Button
          children="Sign In with Google"
          buttonType="google"
          type="button"
          onClick={SignInWithGoogle}
        />
      </ButtonContainer>

      <TextLg>or use your email to sign in</TextLg>

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

      <Link to="#">
        <TextSm>I forgot my password</TextSm>
      </Link>

      <ButtonContainer>
        <Button type="submit">Sign IN</Button>
      </ButtonContainer>

      <p>
        Don't have an account,
        <Link to="/sign-up"> Sign Up here</Link>
      </p>
    </FormContainer>
  );
}

export default SignIn;
