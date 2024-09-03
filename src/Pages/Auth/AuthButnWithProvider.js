import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import '../../Style/Auth.css'
import {GoogleAuthProvider, GithubAuthProvider,signInWithRedirect} from 'firebase/auth'
import { auth } from '../../config/firebase.config'
const AuthButnWithProvider = ({Icon,label,provider}) => {

  const handleClick= async() =>{
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    switch ( provider ) {
      case "google":
        // console.log("inside Google Auth")
          await signInWithRedirect(auth,GoogleAuthProvider).then((result)=>{
            console.log(result)
          }).catch(err=>{
            console.log(`Error:, ${err.Message}`)
          })
        break;

      case "github":
          // console.log("inside Github Auth")
          await signInWithRedirect;
          break; 
      default:
        console.log('inside Google Auth')  

    }
  }
  return (
    <div onClick={handleClick} className='d-flex justify-content-between  items-center  border border-dark p-2 m-3 
    btns'>
    <FaChevronRight/> 
  <p>{label}</p>

  
  <Icon />
    </div>
  )
}

export default AuthButnWithProvider
