import React, { useEffect } from 'react';
import logo from '../Image/Netflix-Brand-Logo.png';
import '../Components/style.css';
import { auth } from '../Utils/Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {toggleGPTSearchView} from '../Utils/GPTSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/Constants';
import { changeLanguage } from '../Utils/configSlice';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showgptSearch = useSelector((store)=>store.gpt.showGPtSearch)


  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     // navigate('/');

    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }


  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email:email, displayName: displayName}));
        navigate('/browser')
        
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();;
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPT search button
    dispatch(toggleGPTSearchView());
  }

  const handleLangChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <>
      <div className='header-container d-flex justify-content-between align-items-center ps-5 pe-5 fixed-top m-auto position-absolute'>
        <img alt='logo' src={logo} width='110px' />
            <div className='d-flex'>
              { showgptSearch &&( <select className='nav-dropdown me-3 ps-2 pe-2' onChange={handleLangChange}>
                {
                  SUPPORTED_LANGUAGES.map((lang)=>(
                    <option key={lang.identifier} value={lang.identifier} className='dropdown-value'>{lang.name}</option>
                  ))
                }
              </select>)}
             {/* <button className='btn btn-light me-3' onClick={handleGPTSearchClick}>{showgptSearch ?'Home' : 'GPT Search' }</button> */}
            <img alt='user-icon' width='35px' src='https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png' />
            <button onClick={handleSignout} className='ps-2 bg-transparent border-0 text-white'>(Sign out)</button>
          </div>

      </div>
    </>
  )
}

export default Header
