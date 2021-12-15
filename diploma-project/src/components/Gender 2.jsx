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

		let isActiveMan = 'button-gender_outline',
			isActiveWoman = 'button-gender_colored';
		if (isActive) {
			isActiveMan = 'button-gender_colored';
			isActiveWoman = 'button-gender_outline';
		} else if (!this.isActive) {
			isActiveMan = 'button-gender_outline';
			isActiveWoman = 'button-gender_colored';
		}

		return (
			<div className='gender-wrapper'>
				<button
					type={'button'}
					className={`button-gender man ${isActiveMan}`}
					onClick={this.nextActive}>
					<span className={`button-gender__gender man`}></span>
				</button>
				<button
					type={'button'}
					className={`button-gender woman ${isActiveWoman}`}
					onClick={this.nextActive}>
					<span className={`button-gender__gender woman`}></span>
				</button>
			</div>
		)
	}
}
