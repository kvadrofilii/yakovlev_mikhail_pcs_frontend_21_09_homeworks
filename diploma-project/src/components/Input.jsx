function Input(props) {

	if (props.type === 'textarea') {
		return (
			<div className='input-container'>
				<div className='input-wrapper'>
					<textarea onChange={(event) => props.setValue(event.target.value)}
						value={props.value}
						className={`input ${props.input}`}
						type={props.type}
						placeholder={props.placeholder}
					/>

					{/*{props.value
						?
						<textarea className={`input ${input}`} placeholder={placeholder} value={value} />
						:
						<textarea className={`input ${input}`} placeholder={placeholder} />
					}*/}
					<span className={`input__ico-after ${props.icoAfter}`}></span >
				</div>
				<div className={`input__text-alert ${props.input}`}>Поле обязательно для заполнения</div>
			</div>
		);
	}

	return (
		<div className='input-container'>
			<div className='input-wrapper'>
				<span className={`input__ico-before ${props.icoBefore}`}></span>
				<input onChange={(event) => props.setValue(event.target.value)}
					value={props.value}
					className={`input ${props.input}`}
					type={props.type}
					placeholder={props.placeholder}
				/>
				{/*{value
					?
					<input className={`input ${input}`} type={type} placeholder={placeholder} value={value} setValue={setValue} />
					:
					<input className={`input ${input}`} type={type} placeholder={placeholder} />
				}*/}
				<span className={`input__ico-after ${props.icoAfter}`}></span >
			</div>
			<div className={`input__text-alert ${props.input}`}>Поле обязательно для заполнения</div>
		</div>
	);


}

export default Input;
