function Input({ type = 'text', placeholder = '', icoBefore = '', input = '', icoAfter = '' }) {

	return (
		<div className='input-wrapper'>
			<span className={`ico-before ${icoBefore}`}></span>
			<input className={`input ${input}`} type={type} placeholder={placeholder} />
			<span className={`ico-after ${icoAfter}`}></span >
		</div >
	);
}

export default Input;
