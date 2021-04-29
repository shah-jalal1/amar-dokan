import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './DisplayFood.css'
import { FaDollarSign } from 'react-icons/fa';
import { useHistory } from 'react-router';
import Orders from '../Orders/Orders';
import { Link } from 'react-router-dom';

const DisplayFood = (props) => {
    const { name, price, imageURL, _id } = props.food;
    const history = useHistory();
    // console.log(_id)

    const loadFoad = (id) => {
        // console.log(id);
        <Orders id={id}></Orders>
        history.push('/orders')

    }

    // const cardStyle = {
    //     float: 'left',
    //     width: '18rem',
    //     margin:'10px',
    //     backgroundColor: '#EEE2DC' 

    // }

    return (
        <div>
            <div className="card-section">
            <Card className="cardStyle" >
                <Card.Img className="card-image" variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="card-body">{name}</Card.Title>
                    <Card.Text>
                        <h3 className="float-left text-info">Price: {price} <FaDollarSign /></h3> 
                        <Link to={`/checkout/${_id}`}><Button className="float-right" variant="info" onClick={() => loadFoad(_id)}>Buy Now</Button></Link>
                         {/* <Button className="float-right" variant="success" onClick={() => loadFoad(_id)}>Buy Now</Button> */}
                     </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default DisplayFood;