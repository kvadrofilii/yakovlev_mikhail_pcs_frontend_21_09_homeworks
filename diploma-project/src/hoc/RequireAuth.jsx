import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

function RequireAuth() {
	const location = useLocation();
	const isAuth = useSelector(state => state.user.isAuth);

	if (!isAuth) {
		return <Navigate to={'login'} state={{ from: location }} />
	}

	return <Outlet />
}

export default RequireAuth;