import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './AllFoods.css'

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    // console.log(foods)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    return (
        <div className='container pb-5'>
            <div className='row'>
            {
                foods.map(food => <Food key={food.idMeal} meal={food}></Food>)
            }
            </div>
            
        </div>
    );
};

export default AllFoods;