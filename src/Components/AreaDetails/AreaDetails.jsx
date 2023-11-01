import React from "react";
import style from "./AreaDetails.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

export default function AreaDetails() {
    let { data, isLoading } = useQuery("areaDetails", getAreaDetails, {
        cacheTime: 60000,
        refetchInterval: 60000,
    });

    let params = useParams();

    function getAreaDetails() {
        return axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`
        );
    }

    return (
        <>
            {isLoading ? (
                <div className="w-100 d-flex justify-content-center vh-100 align-items-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="row gy-3 py-5">
                    {data?.data.meals.map((mealInfo, index) => (
                        <Card meal={mealInfo} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
