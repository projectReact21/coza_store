import React from 'react';
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
function Interface({content}) {
    return ( 
        <Card className="bg-dark text-white  card__item interface">
            <Card.ImgOverlay>
               <Button className="border-0 btn">{content}</Button>
            </Card.ImgOverlay>
        </Card>
     );
}

export default Interface;