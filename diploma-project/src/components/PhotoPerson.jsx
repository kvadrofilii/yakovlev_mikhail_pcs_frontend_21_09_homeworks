function PhotoPerson({ url = '' }) {
	if (url) {
		return <div className='photo-person' style={{
			backgroundImage: `url(${url})`
		}} />;
	} else {
		return <div className='photo-person' />;
	}
}

export default PhotoPerson;
