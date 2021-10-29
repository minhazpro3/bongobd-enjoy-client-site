import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <div className="text-center">
           <h3> Our Rides</h3>
          <div className="row">
          <div className="col col md-3">
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <Link to="/placeOrder"><Button variant="primary">somewhere</Button></Link>
  </Card.Body>
</Card>
          </div>
          </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;