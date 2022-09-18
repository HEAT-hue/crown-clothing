// jshint esversion:6
import { Container } from "react-bootstrap";
import SignIn from "../../components/sign-in/sign-in.component";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const container_style = {
  maxWidth: "400px",
  width: "40%",
  minWidth: "350px",
};

function AuthPage() {
  return (
    <Container style={container_style}>
      <h2>Sign in Page</h2>
      <div style={styles}>
        <SignIn />
      </div>
    </Container>
  );
}

export default AuthPage;
