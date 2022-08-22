// jshint esversion:6
import "./button.styles.scss";

// Create button type classes to ease readabiity in scss file
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button(props) {
  // destructure props
  const { children, buttonType, ...otherInputOptions } = props;

  // Return button element
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherInputOptions}
    >
      {children}
    </button>
  );
}

export default Button;
