import InputDate from '../InputDate/InputDate.jsx';
import InputMonth from '../InputMonth/InputMonth.jsx';

function BirthDate() {
	return (
		<div className='birth-date'>
			<label className='birth-date__label'>Дата рождения</label>
			<div className='birth-date-wrapper'>
				<InputDate placeholder='День' />
				<InputMonth />
				<InputDate placeholder='Год' />
			</div>
		</div>
	);
}

export default BirthDate;
