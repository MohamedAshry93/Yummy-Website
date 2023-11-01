import React from 'react';
import style from './Home.module.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from '../Card/Card';

export default function Home() {
    let { data, isLoading } = useQuery('allMeals', getAllMeals,
        {
            cacheTime: 60000,
            refetchInterval: 60000,
        }
    );

    function getAllMeals() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    }
    // console.log(data);

    return (<>
        {isLoading ? <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
            <span className="loader"></span>
        </div> : <div className='row g-4 py-5'>
            {data?.data.meals.map((mealInfo, index) => <Card meal={mealInfo} key={index} />)}
        </div>}
    </>

    )
}
