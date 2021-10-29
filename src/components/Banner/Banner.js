
import React from 'react';
import { Card } from 'react-bootstrap';
const Banner = () => {
  
    return (
        <Card className="bg-dark text-white border-0 ">
        <Card.Img src="https://www.theenjoycity.com/wp-content/uploads/2018/04/Cafetaria.jpg" />
        <Card.ImgOverlay className="text-black text-center pt-5 img-fluid">
       
          <Card.Title ><h3>Welcome To The <span className="text-warning">Enjoy City</span></h3></Card.Title>
          
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
};

export default Banner;