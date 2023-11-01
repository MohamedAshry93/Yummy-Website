import React, { useState } from "react";
import style from "./Search.module.css";
import axios from "axios";
import Card from "./../Card/Card";

export default function Search() {
    const [meals, setAllMeals] = useState([]);
    async function getAllMeals(type, term) {
        let { data } = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`
        );
        term && data?.meals ? setAllMeals(data.meals) : setAllMeals([]);
    }
    return (
        <>
            <div className="row py-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search with Meal Name"
                        onChange={(e) => {
                            if (/^[a-zA-z]+$/.test(e.target.value) || e.target.value == "")
                                getAllMeals("s", e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search with First Letter"
                        maxLength="1"
                        onChange={(e) => {
                            if (/^[a-zA-z]+$/.test(e.target.value) || e.target.value == "")
                                getAllMeals("f", e.target.value);
                        }}
                    />
                </div>
            </div>

            {!meals.length ? (
                <div className="row vh-85 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <h2 className="h4">No Meals Found</h2>
                        <i className="fa-solid fa-magnifying-glass ms-2"></i>
                    </div>
                </div>
            ) : (
                <div className="row g-3">
                    {meals.map((mealInfo, index) => (
                        <Card key={index} meal={mealInfo} />
                    ))}
                </div>
            )}
        </>
    );
}
