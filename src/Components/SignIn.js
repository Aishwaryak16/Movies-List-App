import React, { useRef, useState } from 'react';
import '../Components/style.css';
import { checkValidData } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const SignIn = () => {

  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);
  const navigate = useNavigate();



  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick =() => {
    //validate form data
  
   console.log(email.current.value);
   console.log(password.current.value);

   const msg = checkValidData(email.current.value, password.current.value);
   console.log(msg);
   seterrorMsg(msg);

   if (msg) return;

   //sign in sign up logic
   if(!isSignInform) {
    //signup logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
    console.log(user);
    //navigate('/browser');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg(errorCode + '-' + errorMessage);
    // ..
  });
   }



   else {
    //signin logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   // navigate('/browser');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    seterrorMsg(errorCode + '-' + errorMessage);
  });

   }

  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const toggleSigninForm = () =>{
    setIsSignInForm(!isSignInform);
  }
  return (
    <>
    <Header />
      <div className='login-container'>
        <div className='gradient-overlay'>
        <div className='p-5 form-container'>
          <h2 className='mb-4'>{isSignInform ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>

          {!isSignInform 
          && ( 
          <input type='text' name='name' placeholder='enter your name*' className='input mb-3 w-100 p-2' required/>
          ) }
              <input ref={email} type='email' name='email' placeholder='enter your email*' className='input mb-3 w-100 p-2' required/> <br/>
              <input ref={password} type='password' name='password' placeholder='enter your password*' className='input mb-3 w-100 p-2' required/> <br/>


              <p className='text-danger help-text'>{errorMsg}</p>
              <button type='submit' className='btn btn-danger mt-3 w-100 mb-2' onClick={HandleButtonClick}> {isSignInform ? 'Sign In' : 'Sign Up'} </button>

              <div className='d-flex justify-content-between'>
                <div>
                <input type='checkbox' id='remember'/> <label for="remember"> Remember me?</label>
                </div>

                <p className='help-text'>Need help?</p>
              </div>
             

              <p className='help-text mt-4 mb-2 cursor-pointer' onClick={toggleSigninForm}>{isSignInform ? 'New to Netflix? Sign Up now' : 'Already registered? Sign In now...'}</p> 

              <p className='help-text-light'> This page is protected by google reCaptcha to ensure you are not a bot. </p>
            </form> 
        </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
