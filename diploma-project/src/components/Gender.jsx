import React, { Component } from 'react';

export default class Gender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: true
		}
		this.nextActive = () => {
			this.setState(({ isActive }) => ({
				isActive: !isActive
			}))
		}
	}

	render() {
		const { isActive } = this.state;

		let isGender = true;
		if (isActive) {
			isGender = 'man';
		} else {
			isGender = 'woman';
		}

		return (
			<div className='gender-wrapper'>
				<button
					type={'button'}
					className={`button-gender ${isGender}`}
					onClick={this.nextActive}>
					<span className={`button-gender__gender ${isGender}`}></span>
				</button>
			</div>
		)
	}
}
