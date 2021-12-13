import React, { useState } from 'react';
import Card from '../components/Card.jsx';
import { useDispatch, useSelector } from "react-redux";

function Persons() {

	// TODO: del prod
	const [cards] = useState([
		{
			"id": 11,
			"firstName": "Jessie",
			"age": "22",
			"img": "../assets/img/users/woman/1.jpg"
		},
		{
			"id": 12,
			"firstName": "Nikki",
			"age": "35",
			"img": "../assets/img/users/woman/2.jpg"
		},
		{
			"id": 13,
			"firstName": "Alana",
			"age": "25",
			"img": "../assets/img/users/woman/3.jpg"
		},
		{
			"id": 14,
			"firstName": "Brianna",
			"age": "36",
			"img": "../assets/img/users/woman/4.jpg"
		},
		{
			"id": 15,
			"firstName": "Sasha",
			"age": "33",
			"img": "../assets/img/users/woman/5.jpg"
		},
		{
			"id": 16,
			"firstName": "Sarah",
			"age": "25",
			"img": "../assets/img/users/woman/6.jpg"
		},
		{
			"id": 17,
			"firstName": "Koni",
			"age": "25",
			"img": "../assets/img/users/woman/7.jpg"
		},
		{
			"id": 18,
			"firstName": "Chanel",
			"age": "25",
			"img": "../assets/img/users/woman/8.jpg"
		},
		{
			"id": 19,
			"firstName": "Asa",
			"age": "32",
			"img": "../assets/img/users/woman/9.jpg"
		},
		{
			"id": 20,
			"firstName": "Alexa",
			"age": "40",
			"img": "../assets/img/users/woman/10.jpg"
		}
	]);

	// TODO: del prod
	const isAuth = useSelector(state => state.user.isAuth);
	const token = useSelector(state => state.user.token);

	console.log(isAuth);
	console.log(token);

	return (
		<div>

			<h2 className={'persons__title'}>Сортировать по: имени</h2>
			<div className={'persons__cards'}>
				{cards.map(card =>
					<Card firstName={card.firstName} age={card.age} img={card.img} id={card.id} key={card.id} />
				)}

			</div>
		</div >
	);
}

export default Persons;
