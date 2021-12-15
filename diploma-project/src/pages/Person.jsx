import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PhotoPerson from '../components/PhotoPerson.jsx';
import cards from '../data/users.json';

function Person() {
	const { id } = useParams();
	const card = cards.users.find(item => item.id === +id)

	return (
		<div>
			<Link to={`/persons`} className={'button button_outline button_big'}>Назад</Link>
			<div className='person-wrapper'>
				<PhotoPerson url={card.img} alt='' />
				<div className='person__content-wrapper'>
					<h2 className='person__title'>{`${card.firstName} ${card.lastName} ${card.age}`}</h2>
					{/*<Button type='button' url='/' className='button button_colored button_small' text='Поприветствовать' />*/}
					<h3 className='person__about-us'>О себе</h3>
					<p>{card.aboutUs}</p>
				</div>
			</div>
		</div>
	);
}

export default Person;
