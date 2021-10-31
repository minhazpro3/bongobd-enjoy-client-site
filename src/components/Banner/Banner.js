
import React from 'react';
import { Card } from 'react-bootstrap';
const Banner = () => {
  
    return (
        <Card className="bg-dark text-white border-0 ">
        <Card.Img src="https://www.theenjoycity.com/wp-content/uploads/2018/04/Cafetaria.jpg" />
        <Card.ImgOverlay className="text-black text-center pt-5 img-fluid">
       
          <Card.Title ><h3  className="text-white">Welcome To The <span className="text-warning">Enjoy City</span></h3></Card.Title>
          
          <Card.Text>
         <h5 className="text-white"> Ride is a verb that means to sit on the back of a <span className="text-warning"> moving animal or to travel in or on a vehicle,</span> <br/> like a car. A ride is a journey made  on an animal or using a vehicle.</h5>
          </Card.Text>
          <Card.Text><h4 className="text-white"><span className="text-warning">Why late?</span> Book early</h4></Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
};

export default Banner;