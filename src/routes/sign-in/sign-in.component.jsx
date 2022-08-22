// jshint esversion:6
import { Button } from "react-bootstrap";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignInPage() {
  const Login = async () => {
    const {user} = await signInWithGooglePopup();
    console.log("Response Object");
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h2>Sign in Page</h2>
      <Button onClick={Login}>Sign In with Google</Button>
    </>
  );
}

export default SignInPage;
