function Input({ type = 'text', placeholder = '', value = '', icoBefore = '', input = '', icoAfter = '' }) {

	if (type !== 'textarea') {
		if (!value) {
			return (
				<div className='input-container'>
					<div className='input-wrapper'>
						<span className={`input__ico-before ${icoBefore}`}></span>
						<input className={`input ${input}`} type={type} placeholder={placeholder} />
						<span className={`input__ico-after ${icoAfter}`}></span >
					</div>
					<div className={`input__text-alert ${input}`}>Поле обязательно для заполнения</div>
				</div>
			);
		} else {
			return (
				<div className='input-container'>
					<div className='input-wrapper'>
						<span className={`input__ico-before ${icoBefore}`}></span>
						<input className={`input ${input}`} type={type} placeholder={placeholder} defaultValue={value} />
						<span className={`input__ico-after ${icoAfter}`}></span >
					</div>
					<div className={`input__text-alert ${input}`}>Поле обязательно для заполнения</div>
				</div>
			);
		};
	} if (type === 'textarea') {
		if (!value) {
			return (
				<div className='input-container'>
					<div className='input-wrapper'>
						<textarea className={`input ${input}`} placeholder={placeholder} />
						<span className={`input__ico-after ${icoAfter}`}></span >
					</div>
					<div className={`input__text-alert ${input}`}>Поле обязательно для заполнения</div>
				</div>
			);
		} else {
			return (
				<div className='input-container'>
					<div className='input-wrapper'>
						<textarea className={`input ${input}`} placeholder={placeholder} defaultValue={value} />
						<span className={`input__ico-after ${icoAfter}`}></span >
					</div>
					<div className={`input__text-alert ${input}`}>Поле обязательно для заполнения</div>
				</div>
			);
		};
	}

}

export default Input;
