import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

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
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
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
      <div>
        <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input type="text" onChange={handleChange} required name="displayName" value={displayName}/>
          <label>E-mail</label>
          <input onChange={handleChange} type="email" required name="email" value={email}/>
          <label>Password</label>
          <input type="password" onChange={handleChange} required name="password" value={password}/>
          <label>Confirm password</label>
          <input type="password" onChange={handleChange} required name="confirmPassword" value={confirmPassword}/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
  );
}