// jshint esversion:6
import { Fragment } from "react";
import SignIn from "../../components/sign-in/sign-in.component";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function AuthPage() {
  return (
    <>
      <div style={styles}>
        <h2>Sign in Page</h2>
        <SignIn />
      </div>
    </>
  );
}

export default AuthPage;
