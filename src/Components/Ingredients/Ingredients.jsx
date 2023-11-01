import React from 'react';
import style from './Ingredients.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

export default function Ingredients() {
    let { data, isLoading } = useQuery('Ingredients', getIngredients,
        {
            cacheTime: 60000,
            refetchInterval: 60000,
        },
    )

    function getIngredients() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    }

    return (<>
        {isLoading ? (
            <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
                <span className="loader"></span>
            </div>
        ) : (<div className='row g-4 py-5'>
            {data?.data.meals.slice(0, 20).map((ingredient, index) => <div key={index} className='col-md-3 text-center'>
                <Link to={`/ingredients/${ingredient.strIngredient}`}>
                    <i className='fa-solid fa-drumstick-bite fa-4x'></i>
                    <h3>{ingredient.strIngredient}</h3>
                    <p>{ingredient.strDescription?.split(" ").slice(0, 20).join(" ")}</p>
                </Link>
            </div>)}
        </div>
        )}
    </>
    )
}
