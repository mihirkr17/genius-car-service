import React from 'react';
import './Expert.css';
import { Button, Card } from 'react-bootstrap';

const Expart = ({ expert }) => {
   const {name, img} = expert;
   return (
      <div>
         <Card className="p-2 text-center">
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Button variant="primary" className='expert_btn'>More details about {name}</Button>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Expart;