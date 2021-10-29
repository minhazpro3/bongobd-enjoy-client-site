import React from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
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
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><button className="btn btn-danger justify-content-end">Delete</button></td>
      </tr>
    </tbody>
  </Table>
 
   </div>
    );
};

export default MyOrder;