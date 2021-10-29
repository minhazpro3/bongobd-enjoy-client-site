import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
      <div className=" container">
       <div className="row">
         <div className="col-md-6">
          <div className="w-75 my-5 py-4 text-center">
            <Card>
              <img  src="https://i.ibb.co/8jRvLzP/67226906-booking-icon-black-website-button-on-white-background-removebg-preview.png" alt=""/>
            </Card>
          </div>
         </div>
    <div className="col-md-6 text-center bg-light my-4 py-3">
    <img className="w-25 " src="https://i.ibb.co/8jRvLzP/67226906-booking-icon-black-website-button-on-white-background-removebg-preview.png" alt=""/>
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <input className=" my-2 w-75 px-2" {...register("name")} defaultValue={user.displayName} type="text" placeholder="name" required />
        <br/>
        <input className=" mb-2 w-75 px-2" {...register("email" )} defaultValue={user.email} type="email" placeholder="email" required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("phone")} placeholder="Phone " required />
        <br/>
        <input className=" w-75 px-2 mt-2" type="text" {...register("post")} placeholder="post code " required />
        <br/>
        <input className=" w-75 px-2 my-2 " type="text" {...register("city")} placeholder="city " required />
        <br/>
        <input className=" w-75 px-2 " type="text" {...register("country")} placeholder="country " required />
        <br/>
        <br/>
        <input className="bg-danger border-0 w-75 px-2 py-1 text-white rounded my-2" type="submit"  />
        </form>
       </div>
    </div>
     
       </div>

       
       </div>
    );
};

export default PlaceOrder;