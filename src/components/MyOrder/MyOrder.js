import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2'



const MyOrder = () => {
  const {user}=useAuth();
  const [mydata, setMydata]=useState([]);
    const [fresh,setFresh]=useState(false)
    const [isLoading, setIsLoading]=useState(false);
     const userData = mydata.filter(pd=>pd.email == user.email)
     

    useEffect(()=>{
      fetch('https://scary-hollow-06026.herokuapp.com/allData')
      .then(res=>res.json())
      .then(data=>{
        setMydata(data)
      setIsLoading(data)
    }
      )},[fresh])



      const handleDelete = id =>{
        const proceed = window.confirm('are you sure? If you want to delete "click" OK')
       if(proceed){
        fetch(`https://scary-hollow-06026.herokuapp.com/allData/${id}`,{
          method: "DELETE",
          headers: {
            'content-type':'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          setFresh(data)
          if(data.deletedCount){
            Swal.fire({
              title: 'Deleted!',
              text: 'Your order has been deleted.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })
       }
      }



    return (
        <div>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Price</th>
        <th>City/Post</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>

    {
      userData.map(datas=> 
        <tbody key={datas._id}>
        <tr>
          <td>{datas.name}</td>
          <td>{datas.title}</td>
          <td>$ {datas.price}</td>
          <td>{datas.city}<br/>{datas.post}</td>
          <td>{datas.status}</td>
          <td><button  onClick={()=>handleDelete(datas._id)} className="btn btn-danger justify-content-end">Delete</button></td>
        </tr>
      </tbody> )
    }
   
  </Table>
  {!isLoading ? <div className=" spin"> <Spinner animation="border" /></div>: ""}
   </div>
    );
};

export default MyOrder;