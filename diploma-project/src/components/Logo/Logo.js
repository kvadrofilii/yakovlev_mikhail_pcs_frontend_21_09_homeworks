function Logo({ className = '' }) {
	return (
		<div className='logo-wrapper'>
			<div className={`logo ${className}`}></div>
			<span className={`logo__text ${className}`}>Znakomstva.com</span>
		</div>
	)
}

export default Logo;