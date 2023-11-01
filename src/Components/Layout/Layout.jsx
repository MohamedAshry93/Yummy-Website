import React from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from './../sidebar/sidebar';

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}
