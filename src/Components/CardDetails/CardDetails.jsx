import React, { useEffect, useState } from 'react';
import style from './CardDetails.module.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function CardDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [details, setAllDetails] = useState({});
    let params = useParams();

    async function getMealDetails() {
        setIsLoading(true);
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        setIsLoading(false);
        return data.meals[0];
    }

    async function getRecipes() {
        let newDetails = await getMealDetails();
        newDetails.ingredients = [];
        let detailsSet = new Map(Object.entries(newDetails));
        for (let i = 0; i < detailsSet.size; i++) {
            if (detailsSet.get(`strIngredient${i}`)) {
                newDetails.ingredients.push(
                    `${detailsSet.get(`strMeasure${i}`)} ${detailsSet.get(`strIngredient${i}`)}`
                )
            }
            setAllDetails(newDetails)
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (<>
        {isLoading == true ? <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
            <span className="loader"></span>
        </div> : <div className='row py-5 g-4'>
            <div className='col-md-4'>
                <img src={details?.strMealThumb} alt={details?.strMeal} className='w-100 rounded-3' />
                <h2 className='mt-3'>{details?.strMeal}</h2>
                <Link className="btn btn-warning w-100 mt-2" to="/">
                    Back To Home
                </Link>
            </div>
            <div className="col-md-8">
                <div>
                    <h2>Instructions</h2>
                    <p>{details?.strInstructions}</p>
                    <h3 className='pt-3'><span className='fw-bolder'><i className='fa-solid fa-location-dot fw-bold me-2'></i> Area: </span>{details?.strArea}</h3>
                    <h3 className='pt-2'><span className='fw-bolder'><i className='fa-solid fa-tag fw-bold me-1'></i> Category: </span>{details?.strCategory}</h3>
                    <h3 className='fw-bolder pt-2'><i className='fa-solid fa-utensils fw-bold me-2'></i> Recipes: </h3>
                    {details.ingredients?.map((ingredient, index) => (<span key={index} className='btn btn-warning me-2 mt-2'>{ingredient}</span>))}
                    {details.strTags ? <>
                        <h3 className='fw-bolder pt-3'><i className='fa-solid fa-hashtag fw-bold me-2'></i> Tags: </h3>
                        {details.strTags?.split(',').map((tag, index) => (<span key={index} className='btn btn-info me-2 mt-2'>{tag}</span>))}
                    </> : ''}
                    <div className='d-flex mt-4'>
                        <a href={details.strSource} rel="noreferrer" className='btn btn-success me-2' target='_blank'><i className='fa-solid fa-circle-info me-2'></i> Source</a>
                        <a href={details.strYoutube} rel="noreferrer" className='btn btn-danger' target='_blank'><i className='fa-brands fa-youtube me-2'></i> Youtube</a>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}
