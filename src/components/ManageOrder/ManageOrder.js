import React from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
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