function Logo({ type = 'big' }) {

	let size,
		isDisplay;

	if (type === 'small') {
		size = 40;
		isDisplay = 'none';
	} else if (type === 'big') {
		size = 60;
		isDisplay = 'block';
	}

	return (
		<div className='logo-wrapper'>
			<div className={`logo ${type}`} style={{
				height: size,
				width: size
			}}></div>
			<span className="logo-text" style={{ display: isDisplay }}>Znakomstva.com</span>
		</div>
	)
}

export default Logo;