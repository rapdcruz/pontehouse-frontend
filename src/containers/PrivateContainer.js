import "./PrivateContainer.css";
import React, { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import NavBarTopPrivate from "../components/NavBarTopPrivate/NavbarTopPrivate";
import NavbarVerticalPrivate from "../components/NavBarVerticalPrivate/NavbarVerticalPrivate";
import FooterPrivate from "../components/common/FooterPrivate";
import AuthenticationService from "../services/authentication.service";

export default function PrivateContainer() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!AuthenticationService.isAuthenticated()) {
            navigate("/public", { replace: true });
        }  else if(AuthenticationService.getUserFromStorage().atualizarPassword){
            navigate("/private/forceupdatepassword", { replace: true });
        } 
    });

    return (
        <div className="container">
            <NavbarVerticalPrivate></NavbarVerticalPrivate>
            <div className="content">
                <NavBarTopPrivate></NavBarTopPrivate>
                <Outlet></Outlet>
                <FooterPrivate></FooterPrivate>
            </div>
        </div>
    );
}

