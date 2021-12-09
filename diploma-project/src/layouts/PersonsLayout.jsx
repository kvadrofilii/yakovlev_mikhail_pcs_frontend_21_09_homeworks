import { Outlet } from "react-router-dom";

function PersonsLayout() {
	return (
		// Layout пользователя. Работает для страниц UsersPage и UserPage
		// Не содержит ничего, кроме Outlet (чтобы роутер знал, куда вставлять контент страниц)
		<Outlet />
	)
}

export default PersonsLayout;