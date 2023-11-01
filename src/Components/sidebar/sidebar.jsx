import React, { useRef } from "react";
import style from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo3.png";

export default function Sidebar() {
    let sidebar = useRef(null);
    let innerSideBar = useRef(null);
    let menuIcon = useRef(null);

    function changeStatus() {
        let position = window
            .getComputedStyle(sidebar.current)
            .getPropertyValue("left");

        if (position == "0px") {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function closeSidebar() {
        let width = innerSideBar.current.offsetWidth;
        sidebar.current.style.left = `-${width}px`;
        menuIcon.current.classList.replace("fa-xmark", "fa-bars");
    }

    function openSidebar() {
        sidebar.current.style.left = "0px";
        menuIcon.current.classList.replace("fa-bars", "fa-xmark");
    }

    return (
        <>
            <nav ref={sidebar} className={`${style["main-nav"]} position-fixed`}>
                <div
                    ref={innerSideBar}
                    className="d-flex flex-column justify-content-between p-3"
                >
                    <ul className="list-unstyled">
                        <li className="p-0 mb-1">
                            <NavLink
                                to="/search"
                                className="w-100 d-inline-block p-2"
                                onClick={closeSidebar}
                            >
                                <i className="fa-solid fa-magnifying-glass me-2"></i> Search
                            </NavLink>
                        </li>
                        <li className="p-0 mb-1">
                            <NavLink
                                to="/categories"
                                className="w-100 d-inline-block p-2"
                                onClick={closeSidebar}
                            >
                                <i className="fa-solid fa-tags me-2"></i> Categories
                            </NavLink>
                        </li>
                        <li className="p-0 mb-1">
                            <NavLink
                                to="/area"
                                className="w-100 d-inline-block p-2"
                                onClick={closeSidebar}
                            >
                                <i className="fa-solid fa-earth-africa me-2"></i> Area
                            </NavLink>
                        </li>
                        <li className="p-0 mb-1">
                            <NavLink
                                to="/ingredients"
                                className="w-100 d-inline-block p-2"
                                onClick={closeSidebar}
                            >
                                <i className="fa-solid fa-bowl-food me-2"></i> Ingredients
                            </NavLink>
                        </li>
                        <li className="p-0 mb-1">
                            <NavLink
                                to="/contact"
                                className="w-100 d-inline-block p-2"
                                onClick={closeSidebar}
                            >
                                <i className="fa-solid fa-address-card me-2"></i> Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="copyright text-center">
                        <div className="social-icons pb-3">
                            <a
                                href="https://facebook.com"
                                rel="noreferrer"
                                target="_blank"
                                className="facebook"
                            >
                                <i className="fa-brands fa-facebook-f p-2 pointer"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                rel="noreferrer"
                                target="_blank"
                                className="twitter"
                            >
                                <i className="fa-brands fa-twitter p-2 pointer"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                rel="noreferrer"
                                target="_blank"
                                className="youtube"
                            >
                                <i className="fa-brands fa-youtube p-2 pointer"></i>
                            </a>
                        </div>
                        <p>
                            Made by<i className="fa-solid fa-heart ps-2 fs-4 icon"></i>{" "}
                            <a
                                className={`fw-bold ${style.author}`}
                                href="https://github.com/MohamedAshry93"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Mohamed Ashry
                            </a>
                        </p>
                        <p>Copyright &copy; 2023 All Rights Reserved.</p>
                    </div>
                </div>
                <div className="text-black px-2 py-3 d-flex flex-column justify-content-between align-items-center">
                    <NavLink className="logo" to="/" onClick={closeSidebar}>
                        <img
                            src={logo}
                            className={`${style.logo} pointer`}
                            alt="Yummy Logo"
                        />
                    </NavLink>
                    <i
                        className="fa-solid fa-bars fa-2x pointer"
                        onClick={changeStatus}
                        ref={menuIcon}
                    ></i>
                    <div className="icons d-flex flex-column gap-2">
                        <i className="fa-solid fa-earth-americas pointer"></i>
                        <i className="fa-solid fa-share-nodes pointer"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}
