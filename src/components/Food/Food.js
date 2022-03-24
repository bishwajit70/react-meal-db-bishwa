import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Food.css'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    // console.log(props)
    const { strMeal, strMealThumb, strCategory, strInstructions} = props.meal
    const {setCartCount} = props;

    return (
        <div className='col-md-4 gy-5 gx-5'>
            <Card className='h-100'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className='text-start'>{strMeal}</Card.Title>
                    <h5 className='text-start fw-normal'>Category: {strCategory}</h5>
                    <Card.Text className='text-start'>
                        {strInstructions.slice(0, 80)}
                    </Card.Text>
                    <Button className='w-100' onClick={setCartCount} variant="primary">
                        <h6>Add To Cart <FontAwesomeIcon className='ms-3' icon={faShoppingBag} /></h6>
                        
                        
                        </Button>
                        
                </Card.Body>
            </Card>
        </div>
    );
};

export default Food;