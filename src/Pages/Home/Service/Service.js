import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Service = ({ service }) => {
   const { id, name, price, description, img } = service;

   const navigate = useNavigate();

   const serviceNavigate = (id) => {
      navigate(`/service/${id}`);
   }
   return (
      <Card>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h6>Price : {price}</h6>
            <Card.Text>
               {description}
            </Card.Text>
            <Button variant="primary" onClick={() => serviceNavigate(id)}>Book: {name}</Button>
         </Card.Body>
      </Card>
   );
};

export default Service;