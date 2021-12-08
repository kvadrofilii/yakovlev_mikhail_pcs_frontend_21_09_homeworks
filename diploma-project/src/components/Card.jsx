import Button from './Button.jsx';

function Card({ firstName, age, img, url = '/' }) {
	const style = {
		backgroundImage: `url(${img})`
	};

	return (
		<div className='card' style={style}>
			<div className='card__text' >
				<span>{firstName}</span><span>{age}</span>
			</div>
			<Button url={url} className='button button_small button_colored' text='Поприветствовать' />
		</div>
	)
}

export default Card;