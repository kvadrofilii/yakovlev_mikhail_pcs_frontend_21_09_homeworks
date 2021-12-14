import React from 'react';

function EditPhotoPerson({ url = '' }) {
	if (url) {
		return (
			<div className='edit-photo-person' style={{
				backgroundImage: `url(${url})`
			}}>
				<div className='edit-photo-person__rectangle'>
					<span className='edit-photo-person__ico'></span>
				</div>
			</div>
		);
	} else {
		return (
			<div className='edit-photo-person'>
				<div className='edit-photo-person__rectangle'>
					<span className='edit-photo-person__ico'></span>
				</div>
			</div>
		);
	}
}

export default EditPhotoPerson;
