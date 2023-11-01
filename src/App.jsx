import React from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import CardDetails from "./Components/CardDetails/CardDetails";
import Search from "./Components/Search/Search";
import Categories from "./Components/Categories/Categories";
import CategoryMeals from './Components/CategoryMeals/CategoryMeals';
import Area from './Components/Area/Area';
import AreaDetails from './Components/AreaDetails/AreaDetails';
import Ingredients from './Components/Ingredients/Ingredients';
import IngredientDetails from './Components/IngredientDetails/IngredientDetails';
import Contact from './Components/Contact/Contact';

let routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meal/:id", element: <CardDetails /> },
      { path: "/search", element: <Search /> },
      { path: '/categories', element: <Categories /> },
      { path: '/categories/:category', element: <CategoryMeals /> },
      { path: '/area', element: <Area /> },
      { path: '/area/:area', element: <AreaDetails /> },
      { path: '/ingredients', element: <Ingredients /> },
      { path: '/ingredients/:ingredient', element: <IngredientDetails /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
