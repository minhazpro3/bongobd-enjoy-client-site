import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signinGoogle,user}=useAuth();

    const location= useLocation();
    const directURL = location.state?.from || '/home';
    
    const history = useHistory()

    const handletoAim = ()=>{
        signinGoogle()
        .then((result) => {
           history.push(directURL)
          }) 
    }
    
    return (
        <div className="login-div my-5">
        <h2> Signing page</h2>
        <div><img className="w-50" src="https://i.ibb.co/DQqrRw1/login-final-removebg-preview.png" alt=""/></div>
      <div className="py-5">
     
      </div>
      <div>
      
          <button onClick={handletoAim} className="btn-sm btn-danger  "> <i className="fab fa-google-plus-g"></i> Google signing</button>
      </div>
        <div>
            <small>You can go through Google ? </small>
           
        </div>
</div>
    );
};

export default Login;