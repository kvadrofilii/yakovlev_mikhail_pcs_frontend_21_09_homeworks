import React, { useState } from 'react';
import Card from '../components/Card.jsx';
//import { useDispatch, useSelector } from "react-redux";
import cards from '../data/users.json';
import Gender from '../components/Gender.jsx';
import Search from '../components/Search.jsx';

function Persons() {

	// TODO: del prod
	//const isAuth = useSelector(state => state.user.isAuth);
	//const token = useSelector(state => state.user.token);
	//console.log(isAuth);
	//console.log(token);

	// Sort 1 => 10
	cards.users.sort((x, y) => x["age"] - y["age"]);
	// Sort 10 => 1
	//cards.users.sort((x, y) => y["age"] - x["age"]);

	//const man = cards.users.filter((user) => user.gender === 'man');
	//console.log(man);

	//const woman = cards.users.filter((user) => user.gender === 'woman');
	//console.log(woman);

	//let isActiveMan = false,
	//	isActiveWoman = true;
	let isActiveMan = 'button-gender_outline',
		isActiveWoman = 'button-gender_colored';

	function isActive(man, woman) {
		console.log(isActiveMan, isActiveWoman);

		if (man === true) {
			isActiveMan = 'button-gender_colored';
			isActiveWoman = 'button-gender_outline';
		}

		if (woman === true) {
			isActiveMan = 'button-gender_outline';
			isActiveWoman = 'button-gender_colored';
		}

	}

	//function isActive(man, woman) {
	//	isActiveMan = man;
	//	isActiveWoman = woman;
	//	console.log(isActiveMan, isActiveWoman);
	//}

	return (
		<div>
			<div className='search-wrapper'>
				<Search />
			</div>
			<div className='gender-wrapper'>
				<button type={'button'} className={`button-gender man button-gender_outline`}>
					<span className={`button-gender__gender man`}></span>
				</button>
				<button type={'button'} className={`button-gender woman button-gender_outline`}>
					<span className={`button-gender__gender woman`}></span>
				</button>
			</div>
			{/*<div className='gender-wrapper'>
				<button onClick={() => isActive(true, false)} type={'button'} className={`button-gender man ${isActiveMan}`}>
					<span className={`button-gender__gender man`}></span>
				</button>
				<button onClick={() => isActive(false, true)} type={'button'} className={`button-gender woman ${isActiveWoman}`}>
					<span className={`button-gender__gender woman`}></span>
				</button>*/}
			{/*<Gender gender='man' isCondition={isActiveMan} onClick={() => isActive(true, false)} />
				<Gender gender='woman' isCondition={isActiveWoman} onClick={() => isActive(false, true)} />*/}
			{/*</div>*/}

			{/*<h2 className={'persons__title'}>Сортировать по: имени</h2>*/}
			<div className={'persons__cards'}>
				{cards.users.map(card =>
					<Card firstName={card.firstName} age={card.age} img={card.img} id={card.id} key={card.id} />
				)}

			</div>
		</div >
	);
}

export default Persons;
