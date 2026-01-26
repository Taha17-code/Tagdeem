import {Container,Nav,Navbar} from 'react-bootstrap';
import Logo from '../../assets/images/شعار تقديم.png';
import '../../Style/Utility/Header.css';


import { Fragment, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useUser from './../../hooks/useUser';
import { AnimatePresence , color, motion } from 'framer-motion';
import MainSpinner from './../MainSpinner';
import userImg from '../../assets/images/user.png';
import {HiLogout} from "react-icons/hi";
import { useQueryClient } from "react-query";
import { auth } from '../../config/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




function Header() {


  const { currentUser ,isLoading,isError,refetch } = useAuth();
  const [isPofileListing,setProfileListing] = useState(false);
  

  const queryClient = useQueryClient();
const signOutUser = async () => {
  try {
    await auth.signOut();
      setTimeout(() => {
      toast.success("تم تسجيل الخروج بنجاح");
    },100);
    queryClient.setQueriesData("user", null);
   


  } catch (error) {
    toast.error("حدث خطأ أثناء تسجيل الخروج");
    console.error(error);
  }
};

  return (
    
    <Fragment>
    <div style={{backgroundColor:'#f9f7f7',position:'fixed',minWidth:'100%',display:'block'}} 
     className='w-full flex items-center justify-between px-4 py-2 shadow-md z-50'>
   
    <Navbar collapseOnSelect expand="lg"   >
      <Container >
      <Navbar.Brand href="/"><img src={Logo} alt="شعار تقديم" style={{width:"80px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="/#whycv">لماذا</Nav.Link>
            <Nav.Link href="#contact">للتواصل</Nav.Link>
           
        
                <Nav.Link href="/#steps">خطوات  </Nav.Link>
                
                {currentUser ? (
        <Nav.Link   style={{minWidth:"100px",cursor:'not-allowed'}}>مرحبًا {currentUser.displayName || currentUser.email?.split('@')[0] || 'المستخدم'}</Nav.Link>
      ) : (
        <Nav.Link   eventKey={2} href="./login" >
               تسجيل الدخول
            </Nav.Link>
      )}

      {/* --------------------- Photo display ----------------------*/}
       <AnimatePresence>


      {isLoading ? (<MainSpinner />)  : (<Fragment> {
         currentUser ?(
           <motion.div  initial={{opacity:0,scale:.7, y:20}} animate={{opacity:1,scale:1, y:0}} exit={{opacity:0,scale:.7, y:20}}
           
           className="w-10 rounded-md relative flex items-center justify-center  cursor-pointer relative"  onClick={()=> setProfileListing(!isPofileListing)}
           onMouseLeave={()=> setProfileListing(!isPofileListing)} style={{marginLeft:'10px'}}> 


         <img   src={currentUser?.photoURL ||  userImg}
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
                alt=""/>
             {/* ----------------   عند الضغط على الصورة يظهر هذا -------------------------------------------- */}
             
             { isPofileListing && ( 
              
              <motion.div  initial={{opacity:0,scale:1}} animate={{opacity:1,scale:1, }} exit={{opacity:0,scale:0, }  }>
               <div className='absolute px-3 rounded-md bg-white  top-5 flex  items-center justify-start  gap-5 w-64 pt-12 p-2 right-5 shadow-lg'>
                 <div className="w-full rounded-full relative flex flex-col items-center justify-center  cursor-pointer relative" style={{marginLeft:'10px'}}> 
         <img
            src={currentUser?.photoURL ||  userImg}
            className="w-10 h-10 rounded-full justify-center items-center text-center p-1 inline-block object-cover cursor-no-drop" 
            referrerPolicy="no-referrer"
            alt=""/>
            {currentUser?.displayName ? ( <p  className='w-full text-center py-2  inline-block cursor-no-drop'>{ currentUser.displayName}</p> ): (<p> مستخدم</p>)}
            <Nav.Link   href="/Profile" className='w-full text-center py-2  inline-block  textcolor' >الملف الشخصي</Nav.Link>

            <div className='  w-full px-2 py-2 border-t border-gray-200 flex  felx flex-row items-center justify-between group ' onClick={signOutUser}>
             
              <Nav.Link href="/" className=' logout-text w-full  text-center py-2 ' >تسجيل الخروج  </Nav.Link>
               <HiLogout className='logout-icon transition-all duration-300 '/>
               
            </div>
           
             </div>
            </div>
            </motion.div>
            )}

            </motion.div>
         ): null
       
    
      }</Fragment>)}
      
    </AnimatePresence>
            
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
    </Fragment>
  );
}

export default Header;

