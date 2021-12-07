function PhotoProfile({ url = '' }) {
	if (url) {
		return <div className='photo-profile' style={{
			backgroundImage: `url(${url})`
		}} />;
	} else {
		return <div className='photo-profile' />;
	}
}

export default PhotoProfile;
