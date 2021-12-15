import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Layout() {
	return (
		<div className={'app'}>
			<Header />
			<main className={'container main'}>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout;