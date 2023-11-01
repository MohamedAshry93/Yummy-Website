import React from "react";
import style from "./IngredientDetails.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function IngredientDetails() {
    let { data, isLoading } = useQuery(
        "ingredientDetails",
        getIngredientDetails,
        {
            cacheTime: 60000,
            refetchInterval: 60000,
        }
    );
    // console.log(data);

    let params = useParams();
    // console.log(params);

    function getIngredientDetails() {
        return axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ingredient}`
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
