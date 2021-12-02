function Button({ url = '/', className = 'button', text = 'Button' }) {
	return <a href={url} className={className}>{text}</a>;
}

export default Button;
