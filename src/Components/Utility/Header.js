import {Button,Container,Form,Nav,Navbar,NavbarBrand,NavbarToggle,NavDropdown,NavLink,Offcanvas} from 'react-bootstrap';
import Logo from '../../assets/images/شعار تقديم.png'
import { Fragment } from 'react';


function Header() {
  return (
    <Fragment>
    <div style={{backgroundColor:'#f9f7f7',position:'fixed',width:'100%',display:'block'}} >
   
    <Navbar collapseOnSelect expand="lg"   >
      <Container >
      <Navbar.Brand href="/"><img src={Logo}  style={{width:"80px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">لماذا</Nav.Link>
            <Nav.Link href="#pricing">للتواصل</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">خطوات  </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               تسجيل الدخول
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Fragment>
  );
}

export default Header;

