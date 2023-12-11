import React, { useState } from 'react';
import heroimage from '../Image/hero-image.jpg';
import '../Components/style.css';

const SignIn = () => {

  const [isSignInform, setIsSignInForm] = useState(true);

  const toggleSigninForm = () =>{
    setIsSignInForm(!isSignInform);
  }
  return (
    <>
      <div className='login-container'>
        <div className='gradient-overlay'>
        <div className='p-5 form-container'>
          <h2 className='mb-4'>{isSignInform ? 'Sign In' : 'Sign Up'}</h2>
            <form>

          {!isSignInform 
          && ( 
          <input type='text' name='name' placeholder='enter your name*' className='input mb-3 w-100 p-2' required/>
          ) }
              <input type='email' name='email' placeholder='enter your email*' className='input mb-3 w-100 p-2' required/> <br/>
              <input type='password' name='password' placeholder='enter your password*' className='input mb-3 w-100 p-2' required/> <br/>

              <button type='submit' className='btn btn-danger mt-3 w-100 mb-2'> {isSignInform ? 'Sign In' : 'Sign Up'} </button>

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
