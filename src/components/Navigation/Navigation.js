import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
       
       <div className="bg-primary">
             {/* <div  className=" d-flex align-items-center justify-content-between  container navigation-div">
             <div className=" md:d-flex ms-2 align-items-center img-user">
             <img className="" src="" alt="" />
             <p  className="text-white text-decoration-none">{user?.displayName}</p>
             </div>
        <div className="md:d-flex align-items-center all-links ">
        <div className="d-flex  align-items-center">
        <Link    className="text-white text-decoration-none" to="/home">Home</Link>
        </div>
    { user?.email ?  <div className="flex gap-2 links ">
       
       
        
      
      
        </div>:  <Link  className="text-white ms-2 " to="login">login</Link>}
        </div>
        </div> */}
       <div>
       <Navbar bg="light" expand="lg">
  <Container>
    <img style={{width: '80px' }} src="https://i.ibb.co/4Vf2zxn/logo-removebg-preview.png" alt="" />
   <Navbar.Toggle aria-controls="basic-navbar-nav"  />
     <Navbar.Collapse id="basic-navbar-nav" className="ms-5 align-items-center ">
      <Nav className="me-auto">
      {user.email ?
        <NavDropdown  title="Options" id="basic-nav-dropdown">
        <Link  className=" ms-2 text-decoration-none" to="/addService">AddService</Link>
        <br/>
        <Link  className=" ms-2 text-decoration-none" to="/myOrder">MyOrder</Link>
        <br/>
        <Link  className="ms-2 text-decoration-none" to="/manageOrder">MngOrder</Link>
          <NavDropdown.Divider />
         
        </NavDropdown>
        : ' '}
         <div className=" d-flex gap-3 align-items-center " >
        <Link className="text-decoration-none bold"  to="/home">Home</Link>
        {user.email ?  <Link to="/home"> <button onClick={logOut} className="btn-sm btn-white  text-decoration-none text-primary">logout</button></Link>: <Link className="text-decoration-none" to="/login">login</Link>}
       
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