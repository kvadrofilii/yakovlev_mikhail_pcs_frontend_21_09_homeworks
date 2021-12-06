function Button({ type = 'link', url = '/', className = 'button', text = 'Button' }) {
	if (type === 'link') {
		return <a href={url} className={className}>{text}</a>
	} else if (type === 'button') {
		return <button className={className} type="submit">{text}</button>
	}
};

export default Button;
