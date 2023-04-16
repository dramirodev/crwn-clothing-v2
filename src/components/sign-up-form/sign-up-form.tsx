import { FormEvent, useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Button } from '../button/button';
import { FormInput } from '../form-input/form-input';
import { SignUpContainer, SignUpTitle } from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export function SignUpForm () {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields;

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = event.target as HTMLInputElement;
    setFormFields({
      ...formFields,
      [name]: value
    });
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      user && await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      console.error('user creation encountered an error', error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Don't have an account?</SignUpTitle>
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
    </SignUpContainer>
  );
}
