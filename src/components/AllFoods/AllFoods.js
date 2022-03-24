import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './AllFoods.css'

const AllFoods = (props) => {
    const { setCartCount } = props;

    const [foods, setFoods] = useState([]);
    // console.log(meals.idMeal)
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    return (
        <div className='container py-5'>
            <div className='row'>
                {
                    foods.map(food => <Food 
                        key={food.idMeal} 
                        meal={food} 
                        setCartCount={setCartCount}
                    ></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoods;