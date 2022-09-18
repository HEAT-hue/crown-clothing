// jshint esversion:6
import "./button.styles.scss";

import {
  GoogleSignInButton,
  BaseButton,
  InvertedButton,
} from "./button.styles";

// Create button type classes to ease readabiity in scss file
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button(props) {
  // destructure props
  const { children, buttonType, ...otherInputOptions } = props;

  let CustomButton = BaseButton;

  if (buttonType === "inverted") {
    CustomButton = InvertedButton;
  } else if (buttonType === "google") {
    CustomButton = GoogleSignInButton;
  }

  // Return button element
  return (
    // <GoogleSignInButton {...otherInputOptions}>{children}</GoogleSignInButton>
    <CustomButton
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherInputOptions}
    >
      {children}
    </CustomButton>
  );
}

export default Button;
