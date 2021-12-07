function EditPhotoProfile({ url = '' }) {
	if (url) {
		return (
			<div className='edit-photo-profile' style={{
				backgroundImage: `url(${url})`
			}}>
				<div className='edit-photo-profile__rectangle'>
					<span className='edit-photo-profile__ico'></span>
				</div>
			</div>
		);
	} else {
		return (
			<div className='edit-photo-profile'>
				<div className='edit-photo-profile__rectangle'>
					<span className='edit-photo-profile__ico'></span>
				</div>
			</div>
		);
	}
}

export default EditPhotoProfile;
