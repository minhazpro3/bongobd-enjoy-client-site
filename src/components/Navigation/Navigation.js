import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
       
       <div className="bg-primary text-white">
       <div>
       <Navbar bg="primary" expand="lg">
  <Container >
    <img style={{width: '60px' }} src="https://i.ibb.co/4Vf2zxn/logo-removebg-preview.png" alt="" />
   <Navbar.Toggle aria-controls="basic-navbar-nav"  />
     <Navbar.Collapse id="basic-navbar-nav" className="ms-5 align-items-center ">
      <Nav className="me-auto">
      {user.email ?
        <NavDropdown className="mt-2" style={{color: 'white'}} title="Options" id="basic-nav-dropdown">
        <Link  className=" ms-2 text-decoration-none" to="/addService">AddService</Link>
        <br/>
        <Link  className=" ms-2 text-decoration-none" to="/myOrder">MyOrder</Link>
        <br/>
        <Link  className="ms-2 text-decoration-none" to="/manageOrder">MngOrder</Link>
          <NavDropdown.Divider />
         
        </NavDropdown>
        : ' '}
         <div className=" d-flex gap-3 align-items-center " >
          <div className="d-flex align-items-center "> 
          <p className="mt-3 mx-2">{user?.displayName}</p>
        <Link className="text-decoration-none bold text-white"  to="/home">Home</Link></div>
        {user.email ?  <Link to="/home"> <button onClick={logOut} className="btn-sm btn-white  text-decoration-none bg-danger text-white border-0">logout</button></Link>: <Link className="text-decoration-none text-white" to="/login">login</Link>}
       
        </div>
      </Nav>
    </Navbar.Collapse>
   
   
  </Container>
</Navbar>
       </div>

        

       </div>
    );
};

export default Navigation;