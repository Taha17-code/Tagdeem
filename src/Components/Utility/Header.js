import {Button,Container,Form,Nav,Navbar,NavbarBrand,NavbarToggle,NavDropdown,NavLink,Offcanvas} from 'react-bootstrap';
import Logo from '../../assets/images/شعار تقديم.png'
import Login from '../../Components/Auth/Login'
import { Fragment } from 'react';
import { useAuth } from '../../contexts/AuthContext';


function Header() {
  const { currentUser, loading } = useAuth();
  return (
    
    <Fragment>
    <div style={{backgroundColor:'#f9f7f7',position:'fixed',width:'100%',display:'block'}} >
   
    <Navbar collapseOnSelect expand="lg"   >
      <Container >
      <Navbar.Brand href="/"><img src={Logo}  style={{width:"80px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="#whycv">لماذا</Nav.Link>
            <Nav.Link href="#contact">للتواصل</Nav.Link>
          
        
                <Nav.Link href="/#steps">خطوات  </Nav.Link>
                
                {currentUser ? (
        <p style={{minWidth:"100px"}}>مرحبًا {currentUser.displayName}</p>
      ) : (
        <Nav.Link   eventKey={2} href="http://localhost:3000/login" >
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

