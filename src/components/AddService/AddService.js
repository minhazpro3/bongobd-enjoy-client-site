import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{

    const url = 'http://localhost:5000/addService'
    fetch(url, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    
    })

  }

    return (
       <div className="text-center">
         <h3 className="text py-2 mt-3">Add Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
        <input className="my-2 w-25" {...register("title")} required type="text" placeholder="Title" />
        <br/>
        <textarea className="mb-2 w-25" {...register("description")} required type="text" placeholder="Description(max-60-Car)" />
        <br/>
        <input className="mb-2 w-25" {...register("price")} required type="text" placeholder="Price" />
        <br/>
        <input className="mb-2 w-25" {...register("link")} required type="text" placeholder="Img Link" />
        <br/>
        <input className="w-25 border-0 rounded bg-danger text-white" type="submit" />
      </form>
       </div>
    );
};

export default AddService;