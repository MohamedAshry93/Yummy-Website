import React from 'react';
import style from './Area.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Area() {
    let { data, isLoading } = useQuery('area', getAllArea,
        {
            cacheTime: 60000,
            refetchInterval: 60000,
        },
    );
    // console.log(data);

    function getAllArea() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    }

    return (<>
        {isLoading ? <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
            <span className="loader"></span>
        </div> : <div className='row g-4 py-5'>
            {data?.data.meals.map((area, index) => <div key={index} className='col-md-3 rounded-2 text-center'>
                <Link to={`/area/${area.strArea}`}>
                    <i className="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>{area.strArea}</h3>
                </Link>
            </div>)}
        </div>}
    </>
    )
}
