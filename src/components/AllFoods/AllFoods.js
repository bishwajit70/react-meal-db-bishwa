import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './AllFoods.css'

const AllFoods = () => {

    const [foods, setFoods] = useState([]);
    const [meals, setMeals] = useState([])
    // console.log(meals.idMeal)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const handleAddToCart = (meals) => {
        setMeals(meals)
    }
    
    return (
        <div className='container pb-5'>
            <h3>{meals.strMeal}</h3>

            <div className='row'>
                {
                    foods.map(food => <Food key={food.idMeal} meal={food} handleAddToCart={handleAddToCart}></Food>)
                }
            </div>

        </div>
    );
};

export default AllFoods;