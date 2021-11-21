import React, { useEffect ,useState} from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'


const Home = () => {
  const [services,setServices]= useState([]);
  const [fresh,setFresh]=useState(false)
  const [isloadding, setIsloadding]=useState(false);

  

    useEffect(()=>{
      fetch('http://localhost:5000/services')
      .then(res=>res.json())
      .then(data=>{
        setServices(data);
        setIsloadding(data)
        setFresh(true)
      })
    },[fresh])

  

      const handaleFind = id=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res=>res.json())
        .then(data=>{
          
        })
      }
   

    return (
        <div>
        <Banner></Banner>
        <div className="text-center container home-div">
           <h3 className=" w-25 mx-auto my-3"> Our Rides</h3>
           {!isloadding ? <div> <Spinner animation="border" /></div>: ""}
          
          <div className="row">
            {
              services.map(pd=>
                <div key={pd._id} className=" col-md-4 mb-5 d-flex justify-content-center">
                <Card style={{ width: '18rem' , height: "23rem"  }}>
        <Card.Img variant="top" style={{height: "13rem"}} src={`data:image/*;base64,${pd.image}`} />
      <Card.Body>
          <Card.Title>{pd.title}</Card.Title>
          <Card.Text>
           {pd.description.slice(0,60)}
          </Card.Text>
         <div className="d-flex justify-content-between">
         <Card.Text>
          <span className="text-success fw-bold"> $ {pd.price}</span>
          </Card.Text>
         <Link to={`/placeOrder/${pd._id}`} ><Button onClick={()=>handaleFind(pd._id)} variant="primary" size="sm">Book Now</Button></Link>
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