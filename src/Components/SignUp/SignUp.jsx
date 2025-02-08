import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const SignUp = () => {

    const [errorMessage , setErrorMessage] = useState('');

    const handleSignUp = (event) =>{
        event.preventDefault();

         const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email , password);

        //  reset error status
        setErrorMessage('');

         //create user with email and password
         createUserWithEmailAndPassword(auth , email , password)
         .then(result => {
            console.log(result.user);
         })
         .catch(error => {
            setErrorMessage(error.message);
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      {
        errorMessage && <p className='text-2xl text-center text-red-700'>{errorMessage}</p>
      }
    </div>
    );
};

export default SignUp;