import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
	const location = useLocation();
	const isAuth = localStorage.getItem('auth');

	if (!isAuth) {
		return <Navigate to={'login'} state={{ from: location }} />
	}

	return <Outlet />
}

export default RequireAuth;