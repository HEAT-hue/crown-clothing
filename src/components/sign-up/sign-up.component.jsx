// jshint esversion:6
import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignUp() {
  const displayNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  async function submitHandler(event) {
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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Set the user display name field
      user.displayName = displayName;

      console.log(user);

      const userDocRef = await createUserDocumentFromAuth(user);

      console.log(userDocRef);

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
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form
            onSubmit={(e) => {
              console.log("Form submitted");
              submitHandler(e);
            }}
          >
            <Form.Group id="display" className="mb-3">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" ref={displayNameRef} />
            </Form.Group>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default SignUp;
