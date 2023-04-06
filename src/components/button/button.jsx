import "./button.scss";


const BUTTON_TYPES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

export function Button({children, buttonType, ...otherProps}) {

  return (
      <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
        {children}
      </button>
  );
}