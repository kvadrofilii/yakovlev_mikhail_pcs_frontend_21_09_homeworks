import { Navigate, useLocation } from "react-router-dom";

const token = true;

function RequireAuth({ children }) {

	const location = useLocation();

	if (token) {
		return <Navigate to={'login'} />
	}

	return children;
}

export default RequireAuth;