function PhotoProfile({ url = '', alt = '' }) {
	return <img className='photo-profile' src={url} alt={alt} />;
}

export default PhotoProfile;