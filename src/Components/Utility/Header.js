import {Container,Nav,Navbar} from 'react-bootstrap';
import Logo from '../../assets/images/شعار تقديم.png'
import { Fragment } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import useUser from './../../hooks/useUser';
import { AnimatePresence , motion } from 'framer-motion';
import MainSpinner from './../MainSpinner';


function Header() {

  const { currentUser ,isLoading,isError,refetch } = useAuth();
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
      {isLoading ? (<MainSpinner />)  : (<Fragment> {currentUser? <motion.div initial={{ opacity: 0 } } animate={{ opacity: 1 }}> {
        <div className="w-10 rounded-full relative flex items-center justify-center" style={{marginLeft:'10px'}}> 
        <img src={ currentUser?.photoURL} className='w-full h-full object-cover rounded-full' referrerPolicy='no-referrer' alt=""/></div>
      }</motion.div> 
      :  <div className="w-10 rounded-full relative flex items-center justify-center" style={{marginLeft:'10px'}}> 
        <img src="../src/assets/images/user.png" className='w-full h-full object-cover rounded-full' referrerPolicy='no-referrer' alt=""/></div>
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

