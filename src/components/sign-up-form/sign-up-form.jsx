import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {Button} from "../button/button";
import {FormInput} from "../form-input/form-input";
import "./sign-up-form.scss";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function SignUpForm() {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});
      resetForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
        return;
      }
      console.error('user creation encountered an error', error);
    }
  };

  return (
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput type="text"
                     onChange={handleChange}
                     required
                     name="displayName"
                     value={displayName}
                     label="Display name"/>
          <FormInput onChange={handleChange} type="email" required name="email" value={email} label="E-mail"/>
          <FormInput type="password"
                     onChange={handleChange}
                     required
                     name="password"
                     value={password}
                     label="Password"/>
          <FormInput type="password"
                     onChange={handleChange}
                     required
                     name="confirmPassword"
                     value={confirmPassword}
                     label="Confirm password"/>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
  );
}