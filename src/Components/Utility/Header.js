import {Container,Nav,Navbar} from 'react-bootstrap';
import Logo from '../../assets/images/شعار تقديم.png'
import { Fragment } from 'react';
import { useAuth } from '../../contexts/AuthContext';


function Header() {
  const { currentUser } = useAuth();
  return (
    
    <Fragment>
    <div style={{backgroundColor:'#f9f7f7',position:'fixed',minWidth:'100%',display:'block'}} >
   
    <Navbar collapseOnSelect expand="lg"   >
      <Container >
      <Navbar.Brand href="/"><img src={Logo} alt="شعار تقديم" style={{width:"80px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="#whycv">لماذا</Nav.Link>
            <Nav.Link href="#contact">للتواصل</Nav.Link>
          
        
                <Nav.Link href="/#steps">خطوات  </Nav.Link>
                
                {currentUser ? (
        <Nav.Link   style={{minWidth:"300px",cursor:'not-allowed'}}>مرحبًا {currentUser.displayName || currentUser.email?.split('@')[0] || 'المستخدم'}</Nav.Link>
      ) : (
        <Nav.Link   eventKey={2} href="./login" >
               تسجيل الدخول
            </Nav.Link>
      )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Fragment>
  );
}

export default Header;

