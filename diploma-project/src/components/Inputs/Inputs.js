function Input({ className = 'input-wrapper', type = 'email', placeholder = '' }) {
	return (
		<div className={className}>
			<span className='ico'></span>
			<input className='input' type={type} placeholder={placeholder} />
		</div>
	);
}

export default Input;
