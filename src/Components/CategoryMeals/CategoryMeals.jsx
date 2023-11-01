import React from "react";
import style from "./CategoryMeals.module.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./../Card/Card";

export default function CategoryMeals() {
    let { data, isLoading } = useQuery("categoryMeals", getCategoryMeals, {
        cacheTime: 60000,
        refetchInterval: 60000,
    });

    let params = useParams();


    function getCategoryMeals() {
        return axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
        );
    }

    return (
        <>
            {isLoading ? (
                <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="row g-4 py-5">
                    {data?.data.meals.map((mealInfo, index) => (
                        <Card meal={mealInfo} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
