import React from 'react'
import { HashLoader} from 'react-spinners';

const MainSpinner = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
     <HashLoader size={80} color="#3f72af" />
      
    </div>
  )
}

export default MainSpinner
