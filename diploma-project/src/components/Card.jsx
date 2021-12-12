import { Link } from "react-router-dom";
import Button from './Button.jsx';

function Card({ firstName, age, img, id }) {
	const style = {
		backgroundImage: `url(${img})`
	};

	return (
		<Link to={`${id}`} className={'link'}>
			<div className='card' style={style}>
				<div className='card__text' >
					<span>{firstName}</span><span>{age}</span>
				</div>
				<Button url={'/'} className='button button_small button_colored' text='Поприветствовать' />
			</div>
		</Link>
	)
}

export default Card;