import { Link } from "react-router-dom";

function Logo({ auth }) {
	if (!auth) {
		return (
			<div className={'logo-wrapper'}>
				<div className={`logo__ico`}></div>
				<span className={`logo__text`}>Znakomstva.com</span>
			</div>
		)
	} else {
		return (
			<Link to={'/'} className={'link'}>
				<div className={'logo-wrapper'}>
					<div className={`logo__ico logo-main`}></div>
					<span className={`logo__text logo-main`}>Znakomstva.com</span>
				</div>
			</Link>
		)
	}
}

export default Logo;