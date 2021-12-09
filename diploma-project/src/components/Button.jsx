import { Link } from "react-router-dom";

function Button({ type = 'link', url = '/', className = 'button', text = 'Button' }) {
	if (type === 'link') {
		return <Link to={url} className={`link ${className}`}>{text}</Link>
	} else if (type === 'button') {
		return <button className={className} type="submit">{text}</button>
	}
};

export default Button;
