function Input({ type = 'text', placeholder = '', icoBefore = '', input = '', icoAfter = '' }) {
	return (
		<div>
			<div className='input-wrapper'>
				<span className={`input__ico-before ${icoBefore}`}></span>
				<input className={`input ${input}`} type={type} placeholder={placeholder} />
				<span className={`input__ico-after ${icoAfter}`}></span >
			</div >
			<div className={`input__text-alert ${input}`}>Поле обязательно для заполнения</div>
		</div>
	);
}

export default Input;
