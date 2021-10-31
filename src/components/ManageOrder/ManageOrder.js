import React, { useEffect, useState } from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
  const [allInfo, setAllInfo]=useState([]);

  const [fresh, setFresh]=useState(false)

  useEffect(()=>{
    fetch('http://localhost:5000/allData')
    .then(res=>res.json())
    .then(data=>{
      setAllInfo(data);
    })
  },[fresh])

  const handleDelete = (id)=>{
    console.log(id);
    const proceed = window.confirm('are you sure? If you want to delete "click" OK')
    if(proceed){
      fetch(`http://localhost:5000/deleteAll/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setFresh(data)
      
    })
    }
  }


        const handleUpdate = id =>{
          const update = {
            status: 'Approved'
          }
          fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(update)
          })
          .then(res=>res.json())
          .then(data=>{
            setFresh(data)
          })
        }

    return (
       <div >
      <table className="table table-hover ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">City</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
  allInfo.map(info  => 
    <tbody className="my-1" key={info._id}>
    <tr>
      <td>{info.name}</td>
      <td>{info.title}</td>
      <td>{info.price}</td>
      <td>{info.city}</td>
      <td><input onClick={()=>handleUpdate(info._id)} className="bg-success p-2 text-white border-0 rounded " type="button" value={info.status} /></td>
      <td><input onClick={()=>handleDelete(info._id)} className="bg-danger p-2 text-white border-0 rounded " type="button" value="Delete" /></td>
    </tr>
  </tbody>
  )
}
  
</table>
      <div className="bg-light py-3  ">
        <div className="d-flex justify-content-between container">
        <small className="hover-courser">SHOW: $ PER PAGE <i className="fas fa-arrow-down"></i></small>
<small> <i className="fas fa-chevron-left"> </i> Previous 1 Next <i className="fas fa-chevron-right"></i></small>
        </div>
      </div>
       </div>
    );
};

export default ManageOrder;

