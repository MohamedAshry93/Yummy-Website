import React from 'react';
import style from './Categories.module.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categories() {
    let { data, isLoading } = useQuery('categories', getCategories, {
        cacheTime: 60000,
        refetchInterval: 60000,
    },
    )

    function getCategories() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    }

    return (<>
        {isLoading ? <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
            <span className="loader"></span>
        </div> : <div className='row g-4 py-5'>
            {data?.data.categories.map((category, index) => <div key={index} className='col-md-3'>
                <Link
                    className="text-dark"
                    to={`/categories/${category.strCategory}`}
                >
                    <div
                        className={`${style.inner} position-relative rounded-3 overflow-hidden`}
                    >
                        <img
                            src={category.strCategoryThumb}
                            className="w-100"
                            alt={category.strCategory}
                        />
                        <div className="layer w-100 h-100 position-absolute text-center start-0 d-flex flex-column justify-content-center align-items-center p-3">
                            <h2>{category.strCategory}</h2>
                            <p>
                                {category.strCategoryDescription?.split(" ").slice(0, 20).join(" ")}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>)}
        </div>}
    </>

    )
}
