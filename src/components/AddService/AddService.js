import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)
    return (
       <div className="text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
        <input className="my-2" {...register("title")} required type="text" placeholder="Title" />
        <br/>
        <input className="mb-2" {...register("description")} required type="text" placeholder="Description" />
        <br/>
        <input className="mb-2" {...register("price")} required type="text" placeholder="Price" />
        <br/>
        <input className="mb-2" {...register("link")} required type="text" placeholder="Img Link" />
        <br/>
        <input type="submit" />
      </form>
       </div>
    );
};

export default AddService;