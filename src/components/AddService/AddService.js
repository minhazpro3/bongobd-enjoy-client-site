import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    const formData = new FormData();
    formData.append('title', data.title)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('image', data.image[0])
    

    const url = 'http://localhost:5000/addService'
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        reset()
      }
    
    })

  }

    return (
       <div className="text-center">
         <h3 className="text py-2 mt-3">Add Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
        <input className="my-2 w-25" {...register("title")} required type="text" placeholder="Title" />
        <br/>
        <textarea className="mb-2 w-25" {...register("description")} required type="text" placeholder="Description(max-60-Car)" />
        <br/>
        <input className="mb-2 w-25" {...register("price")} required type="text" placeholder="Price" />
        <br/>
        <input className="mb-2 w-25" {...register("image")} accept="image/*"  type="file"  />
        <br/>
        <input className="w-25 border-0 rounded bg-danger text-white" type="submit" />
      </form>
       </div>
    );
};

export default AddService;