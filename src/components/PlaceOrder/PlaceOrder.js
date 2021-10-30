import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
  const {id}=useParams();
  const {user}=useAuth();
  console.log(user.email );
  const [services,setServices]=useState([]);
  
  
  

  


    const { register, handleSubmit  } = useForm();
    const onSubmit = data => {
    
      const  {title, price, description, link, _id} = services.find(service =>  service._id === id)
      

      const orders = {
        // _id,
        title, 
        price,
        description,
        link,
       city: data.city,
        country: data.country,
        email: data.email,
        name: data.name,
        phone: data.phone,
        post: data.post
      }
      
     fetch('http://localhost:5000/allData' , {
       method: "POST",
       headers: {
         'content-type': 'application/json'
       },
       body:JSON.stringify(orders)
     })
     .then(res=>res.json())
     .then(data=>{
      
     })
      };

    

      useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
      },[])

      const items = services.filter(item=>item._id===id)
      
      
      
      

    return (
      <div className=" container">

        <h3 className="text-center">Place Order</h3>
       <div className="row">
         <div className="col-md-6">
          <div className="w-75 my-5 py-4 d-flex card-div justify-content-center text-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={items[0]?.link} />
            <Card.Body>
              <Card.Title>{items[0]?.title}</Card.Title>
              <Card.Text>
               {items[0]?.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
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