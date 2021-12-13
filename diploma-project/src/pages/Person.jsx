import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button.jsx';
import PhotoPerson from '../components/PhotoPerson.jsx';

function Person() {
	const { id } = useParams();

	// TODO: del prod
	const [cards] = useState([
		{
			"id": 11,
			"firstName": "Jessie",
			"age": "22",
			"img": "../assets/img/users/woman/1.jpg",
			"aboutUs": "Адекватного мужчину… реальное предложение.. реальная встреча… смотрите возрастные рамки пожалуйста молодые люди… Если Вас, что-то не устроило.., не надо грязи и хамства – это не по-мужски… Найдите в себе силы, просто пройти мимо… Я уважаю мужчин, и хотелось бы общаться именно с теми, кто знает себе цену и цену времени! Очень удивляют коллекционеры телефонов, мне кажется нужно быть полным неудачником, чтобы тратить несколько недель, куча слов, обещаний, на то чтобы уговорить на встречу, получить телефон и все, на этом миссия выполнена! Прошу, уважайте свое и мое время Мне интересно только реальное конкретное общение! И предложения встречи. С определенным временем и днем. (а не как-нибудь, где-нибудь, во сколько-нибудь) или вечером после. И. т.д."
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

	const card = cards.find(item => item.id === +id)

	return (
		<div>
			<Button type='link' url={'persons'} className='button button_outline button_big' text='Назад' />
			<div className='person-wrapper'>
				<PhotoPerson url={card.img} alt='' />
				<div className='person__content-wrapper'>
					<h2 className='person__title'>{`${card.firstName} ${card.age}`}</h2>
					<Button type='button' url='/' className='button button_colored button_small' text='Поприветствовать' />
					<h3 className='person__about-us'>О себе</h3>
					<p>{card.aboutUs}</p>
				</div>
			</div>
		</div>
	);
}

export default Person;
