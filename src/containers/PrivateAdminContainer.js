import "./PrivateContainer.css";
import React, { useEffect } from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import AuthenticationService from "../services/authentication.service";

export default function PrivateAdminContainer() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!AuthenticationService.isAdminstrator()) {
            navigate("/private", { replace: true });
        }
    });

    return (

        <Outlet></Outlet>

    );
}

