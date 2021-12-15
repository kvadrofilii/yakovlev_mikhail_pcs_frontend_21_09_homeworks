import React, { Component } from 'react';

export default class PhotoPerson extends Component {
	constructor(props) {
		super(props);
		this.state = {
			like: false,
			url: ''
		}
		this.onLike = () => {
			this.setState(({ like }) => ({
				like: !like
			}))
		}
	}

	render() {
		const { url } = this.props;
		const { like } = this.state;

		let className = 'card__heart';
		if (like) {
			className += ' like';
		}

		if (url) {
			return (
				<div className='photo-person' style={{ backgroundImage: `url(${url})` }} >
					<div onClick={this.onLike} className={'card__like'}>
						<span className={className}></span>
					</div>
				</div >)
		} else {
			return <div className='photo-person' />;
		}

	}
}