import {useState} from "react";
import {signInAuthUserWithEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import {Button, BUTTON_TYPES} from "../button/button";
import {FormInput} from "../form-input/form-input";
import "./sign-in-form.styles";
import {ButtonsContainer, SignInContainer, SignInTitle} from "./sign-in-form.styles";

const defaultFormFields = {
  email: '',
  password: '',
};

export function SignInForm() {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {email, password} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {

      console.error('user creation encountered an error', error);
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

  };

  return (
      <SignInContainer>
        <SignInTitle>Already have and account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput onChange={handleChange} type="email" required name="email" value={email} label="E-mail"/>
          <FormInput type="password"
                     onChange={handleChange}
                     required
                     name="password"
                     value={password}
                     label="Password"/>
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPES.google}>Sign in with Google</Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
  );
}