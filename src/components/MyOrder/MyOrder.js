import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';


const MyOrder = () => {
  const {user}=useAuth();
  const [mydata, setMydata]=useState([]);
    const [fresh,setFresh]=useState(false)
     const userData = mydata.filter(pd=>pd.email == user.email)
     
    useEffect(()=>{
      fetch('http://localhost:5000/allData')
      .then(res=>res.json())
      .then(data=>setMydata(data))
    },[fresh])

      const handleDelete = id =>{
        const proceed = window.confirm('are you sure? If you want to delete "click" OK')
       if(proceed){
        fetch(`http://localhost:5000/allData/${id}`,{
          method: "DELETE",
          headers: {
            'content-type':'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          setFresh(data)})
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
        <th>City</th>
        <th>Delete</th>
      </tr>
    </thead>
    {
      userData.map(datas=> 
        <tbody key={datas._id}>
        <tr>
          <td>{datas.name}</td>
          <td>{datas.title}</td>
          <td>{datas.price}</td>
          <td>{datas.city}</td>
          <td><button  onClick={()=>handleDelete(datas._id)} className="btn btn-danger justify-content-end">Delete</button></td>
        </tr>
      </tbody> )
    }
   
  </Table>
 
   </div>
    );
};

export default MyOrder;