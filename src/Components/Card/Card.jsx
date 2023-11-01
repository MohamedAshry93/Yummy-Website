import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({meal}) {
    return (
        <>
            <div className="col-md-3">
                <Link to={`/meal/${meal.idMeal}`}>
                    <div className={`${style.inner} position-relative rounded-3 overflow-hidden cursor-pointer`}>
                        <img src={meal.strMealThumb} className='w-100' alt={meal.strMeal} />
                        <div className='position-absolute start-0 w-100 h-100 layer d-flex align-items-center p-3'>
                            <h2 className='text-dark'>{meal.strMeal}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
