import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";


const SignUp = () => {

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    //console.log(email , password);




    // Validation
    //  reset error status
    setErrorMessage('');
    setSuccess(false); // every time action e jaoar aage reset kore nibo

    if(!terms){
      setErrorMessage('Please accept terms and conditions');
      return;
    }




    if (password.length < 6) {
      errorMessage('Password must be 6 characters or longer');
      return; // jaate firebase e jeye firebase theke send kora error na dekhay
    }

    //create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch(error => {
        setErrorMessage(error.message);
        setSuccess(false);
      });


  };


  return (
    <div className="card bg-base-100 mx-auto mt-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl font-bold text-center">Sign Up now!</h3>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
          <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-12'>
            {
              showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
            }
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start  cursor-pointer">
          <input type="checkbox" name='terms' className="checkbox" />
            <span className="label-text ml-2">Accept terms and conditions</span>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      {
        errorMessage && <p className='text-2xl text-center text-red-700'>{errorMessage}</p>
      }
      {
        success && <p className='text-green-700 font-semibold text-center'>Sign up Successfull!</p>
      }
    </div>
  );
};

export default SignUp;