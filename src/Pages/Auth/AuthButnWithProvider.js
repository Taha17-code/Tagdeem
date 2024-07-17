import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import '../../Style/Auth.css'
const AuthButnWithProvider = ({Icon,label,provider}) => {

  const handleClick=()=>{
    switch ( provider ) {
      case "google":
        console.log("inside Google Auth")
        break;

      case "github":
          console.log("inside Github Auth")
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
