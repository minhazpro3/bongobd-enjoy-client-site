import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user,logOut}=useAuth();
    return (
       
       <div className="bg-primary">
             <div  className=" d-flex align-items-center justify-content-between  container navigation-div">
             <div className=" md:d-flex ms-2 align-items-center img-user">
             <img className="" src="https://i.ibb.co/4Vf2zxn/logo-removebg-preview.png" alt="" />
             <p  className="text-white text-decoration-none">{user?.displayName}</p>
             </div>
        <div className="md:d-flex align-items-center all-links ">
        <div className="d-flex  align-items-center">
        <Link    className="text-white text-decoration-none" to="/home">Home</Link>
        </div>
    { user?.email ?  <div className="flex gap-2 links ">
        <Link  className="text-white ms-2 text-decoration-none" to="/addService">AddService</Link>
        <Link  className="text-white mx-2 text-decoration-none" to="myOrder">MyOrder</Link>
        <Link  className="text-white text-decoration-none" to="manageOrder">MngOrder</Link>
      
       <Link to="/home"> <button onClick={logOut} className="btn-sm btn-white  text-decoration-none text-primary">logout</button></Link>
        </div>:  <Link  className="text-white ms-2 " to="login">login</Link>}
        </div>
        </div>
       </div>
    );
};

export default Navigation;