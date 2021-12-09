import { Outlet } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Layout({ page = 'login' }) {
	return (
		<div className={'app'}>
			<Header page={page} />
			<main className={'container main'}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout;