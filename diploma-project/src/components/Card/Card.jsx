import Button from '../Button/Button.jsx';

function Card({ name, age, url = '/' }) {
	return (
		<div className='card'>
			<div className='card__text'>
				<span>{name}</span><span>{age}</span>
			</div>
			<Button url={url} className='button button_small button_colored' text='Поприветствовать' />
		</div>
	)
}

export default Card;