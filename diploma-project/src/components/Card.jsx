import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from './Button.jsx';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			like: false
		}
		this.onLike = () => {
			this.setState(({ like }) => ({
				like: !like
			}))
		}
	}

	render() {
		const { firstName, lastName, age, img, id } = this.props;
		const style = { backgroundImage: `url(${img})` };
		const { like } = this.state;

		let className = 'card__heart';
		if (like) {
			className += ' like';
		}

		return (
			<div className={'card'} style={style}>
				<div onClick={this.onLike} className={'card__like'}>
					<span className={className}></span>
				</div>
				<div className={'card__text'} >
					<span>{firstName}</span>
					<span>{lastName}</span>
					<span>{age}</span>
				</div>
				<Link to={`${id}`} className={'link'}>
					<Button
						type={'button'}
						url={''}
						className='button button_small button_colored'
						text='Подробнее' />
				</Link>
			</div>

		)
	}
}
