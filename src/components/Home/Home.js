import React, { useEffect ,useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
  const [services,setServices]= useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/services')
      .then(res=>res.json())
      .then(data=>{
        setServices(data);
      })
    },[])

    return (
        <div>
        <Banner></Banner>
        <div className="text-center container">
           <h3 className=" w-25 mx-auto my-3"> Our Rides</h3>
          <div className="row">
            {
              services.map(pd=>
                <div key={pd._id} className=" col-md-4 mb-5 d-flex justify-content-center">
                <Card style={{ width: '18rem' , height: "23rem"  }}>
        <Card.Img variant="top" style={{height: "13rem"}} src={pd.link} />
        <Card.Body>
          <Card.Title>{pd.title}</Card.Title>
          <Card.Text>
           {pd.description.slice(0,60)}
          </Card.Text>
         <div className="d-flex justify-content-between">
         <Card.Text>
           $ {pd.price}
          </Card.Text>
         <Link to="/placeOrder"><Button variant="primary" size="sm">Book Now</Button></Link>
         </div>
        </Card.Body>
      </Card>
                </div>
                )
            }
         
          </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;