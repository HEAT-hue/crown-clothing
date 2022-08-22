// jshint esversion:6
import { Container } from "react-bootstrap";
import SignUp from "../../components/sign-up/sign-up.component";

const container_style = {
  maxWidth: "400px",
  width: "40%",
  minWidth: "350px",
};

function SignUpPage() {
  return (
    <Container style={container_style}>
      <SignUp />
      <div className="check w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </Container>
  );
}

export default SignUpPage;
