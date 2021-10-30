import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';


const MyOrder = () => {
  const {user}=useAuth();
  // console.log('user er email', user.email);
  const [mydata, setMydata]=useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/allData')
      .then(res=>res.json())
      .then(data=>setMydata(data))
    },[])

    // const data = mydata.filter(info=>console.log('info er email akhane', info.email))
    // console.log(data);
    // mydata.map(information=>console.log(information))

    return (
        <div>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>SL</th>
        <th>Title</th>
        <th>Price</th>
        <th>Img link</th>
        <th>Delete</th>
      </tr>
    </thead>
    {
      mydata.map(datas=> 
        <tbody key={datas._id}>
        <tr>
          <td>1</td>
          <td>{datas.email}</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button className="btn btn-danger justify-content-end">Delete</button></td>
        </tr>
      </tbody> )
    }
   
  </Table>
 
   </div>
    );
};

export default MyOrder;