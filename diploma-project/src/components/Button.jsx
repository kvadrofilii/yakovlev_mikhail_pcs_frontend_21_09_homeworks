import { Link } from "react-router-dom";

function Button({ type = 'link', url, className, text = 'Button' }) {
	if (type === 'link') {
		return <Link to={url} className={`link button ${className}`}>{text}</Link>
	} else if (type === 'button') {
		return <button className={`button ${className}`} type="submit">{text}</button>
	}
};

export default Button;
