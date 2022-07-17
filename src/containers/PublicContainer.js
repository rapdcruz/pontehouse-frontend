import "./PublicContainer.css";
import React from "react";
import { Outlet } from 'react-router-dom';
import NavbarPublic from "../components/NavBarPublic/NavbarPublic";
import FooterPublic from "../components/common/FooterPublic";



export default function PublicContainer() {
    return (
        <div className="container-fluid p-0">
            <NavbarPublic></NavbarPublic>
            <Outlet></Outlet>
            <FooterPublic></FooterPublic>
        </div>
    );
}

