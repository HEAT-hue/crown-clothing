// jshint esversion:6
import "./button.styles.scss";

import {
  GoogleSignInButton,
  BaseButton,
  InvertedButton,
} from "./button.styles";

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
    <CustomButton>
      {children}
    </CustomButton>
  );
}

export default Button;
