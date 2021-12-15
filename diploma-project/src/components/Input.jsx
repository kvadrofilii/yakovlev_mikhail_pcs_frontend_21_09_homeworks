import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iaError: false
		}
		//this.onLike = () => {
		//	this.setState(({ iaError }) => ({
		//		isError: !isError
		//	}))
		//}
	}

	render() {
		const { type, value, placeholder, icoBefore, icoAfter, setValue, isError } = this.props;
		//const { isError } = this.state;

		//let className = '';
		//if (isError) {
		//	className = 'input_error';
		//}

		if (type === 'textarea') {
			return (
				<div className='input-container'>
					<div className='input-wrapper'>
						<textarea onChange={(event) => setValue(event.target.value)}
							value={value}
							className={`input ${isError}`}
							type={type}
							placeholder={placeholder}
						/>
						<span className={`input__ico-after ${icoAfter}`}></span >
					</div>
					<div className={`input__text-alert ${isError}`}>Поле обязательно для заполнения</div>
				</div>
			);
		}

		return (
			<div className='input-container'>
				<div className='input-wrapper'>
					<span className={`input__ico-before ${icoBefore}`}></span>
					<input onChange={(event) => setValue(event.target.value)}
						value={value}
						className={`input ${isError}`}
						type={type}
						placeholder={placeholder}
					/>
					<span className={`input__ico-after ${icoAfter}`}></span >
				</div>
				<div className={`input__text-alert ${isError}`}>Поле обязательно для заполнения</div>
			</div>
		);
	}
}