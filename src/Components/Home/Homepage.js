import React from 'react'
import { Row } from 'react-bootstrap'
import '../../Style/Home/Homepage.css'
import CV from '../../assets/images/curriculum-vitae.png'
import ResumeGif from '../../assets/images/Resume folder (1).gif'
import { Link } from 'react-router-dom';

        import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db }from '../../config/firebase.config';


const Homepage = () => {
   useEffect(() => {
      const testFirestore = async () => {
      const user = auth.currentUser;

    if (!user) {
      console.log("❌ NO USER");
      return;
    }

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: user.displayName
    });

    console.log("🔥 FIRESTORE WRITE SUCCESS");
  };

  testFirestore();
}, []);
     
  return (
    <div style={{backgroundColor:'#3f72af',paddingTop:'150px',minHeight:'600px'}} >
      
    <div className='d-flex justify-content-center p-5'>

   <div>
   <p  id='headlineOne' style={{color:'#dbe2ef'}}>أظهر إمكانياتك وكل مالديك
   ليراك العالم</p>

   <p  style={{color:'#dbe2ef',wordBreak:'break-word'}}>نحن هنا لمساعدتك في تقديم نفسك  للشركات والجهات المختصة
   بشكل يليق بإمكانياتك عبر السيرة الذاتية</p>

   <p className='homeButton' style={{border:'2px #dbe2ef solid',color:'#dbe2ef', }} > تواصل معنا </p>
   
   
   <Link to={'/login'}> <p className='homeButton' style={{border:'2px #112d4e solid',backgroundColor:'#112d4e',color:'#dbe2ef',}}>
    انشئ سيرة ذاتية  </p></Link> 

    {
      
    }

   </div>


   <div><img src={ResumeGif} style={{maxWidth:'100%'}} fluid/></div>
   
    </div>
    </div>
  )
}

export default Homepage
