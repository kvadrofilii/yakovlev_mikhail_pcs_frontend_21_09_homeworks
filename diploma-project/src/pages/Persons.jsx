import React, { Component } from 'react';
import Card from '../components/Card.jsx';
import cards from '../data/users.json';

export default class Persons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: true,
			isAge: true,
			isFirstName: true,
			isLastName: true
		}
		this.sortGender = () => {
			this.setState(({ isActive }) => ({
				isActive: !isActive
			}))
		}
		this.sortAge = () => {
			this.setState((sort) => ({
				sort: 'age',
			}))
			this.setState(({ isAge }) => ({
				isAge: !isAge
			}))
		}
		this.sortFirstName = () => {
			this.setState(sort => ({
				sort: 'firstName'
			}))
			this.setState(({ isFirstName }) => ({
				isFirstName: !isFirstName
			}))
		}
		this.sortLastName = () => {
			this.setState(sort => ({
				sort: 'lastName'
			}))
			this.setState(({ isLastName }) => ({
				isLastName: !isLastName
			}))
		}
	}

	render() {
		const { sort, isActive, isAge, isFirstName, isLastName } = this.state;
		let sortCards = cards.users;

		function sortSwitch(sortCards) {
			switch (sort) {
				case 'age': {
					isAge ?
						sortCards = sortCards.sort((x, y) => x["age"] - y["age"]) :
						sortCards = sortCards.sort((x, y) => y["age"] - x["age"]);
					break;
				}
				case 'firstName': {
					isFirstName ?
						sortCards = sortCards.sort((a, b) => a.firstName.localeCompare(b.firstName)) :
						sortCards = sortCards.sort((a, b) => b.firstName.localeCompare(a.firstName));
					break;
				}
				case 'lastName': {
					isLastName ?
						sortCards = sortCards.sort((a, b) => a.lastName.localeCompare(b.lastName)) :
						sortCards = sortCards.sort((a, b) => b.lastName.localeCompare(a.lastName));
					break;
				}
				default: {
					sortCards = cards.users;
					break;
				}
			}
		}

		let isGender = true;
		if (isActive) {
			sortCards = cards.users.filter((user) => user.gender === 'woman');
			sortSwitch(sortCards);
			isGender = 'woman';
		} else {
			sortCards = cards.users.filter((user) => user.gender === 'man');
			sortSwitch(sortCards);
			isGender = 'man';
		}

		return (
			<div>
				<div className='gender-wrapper'>
					<button
						type={'button'}
						className={`button-gender ${isGender}`}
						onClick={this.sortGender}>
						<span className={`button-gender__gender ${isGender}`}></span>
					</button>
				</div>

				<div className='sort-wrapper'>
					<button onClick={this.sortAge} className='button button_small persons__button'>Возраст</button>
					<button onClick={this.sortFirstName} className='button button_small persons__button'>Имя</button>
					<button onClick={this.sortLastName} className='button button_small persons__button'>Фамилия</button>
				</div>
				<div className={'persons__cards'}>
					{sortCards.map(item =>
						<Card	{...item} key={item.id} />
					)}
				</div>
			</div >
		);
	}
}
