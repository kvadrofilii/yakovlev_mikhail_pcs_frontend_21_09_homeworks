import { Link } from "react-router-dom";

//function Button({ type = 'link', url, className, text = 'Button' }) {
function Button(props) {
	if (props.type === 'link') {
		return <Link to={props.url} className={`link button ${props.className}`}>{props.text}</Link>
	} else if (props.type === 'button') {
		return <button className={`button ${props.className}`} type="submit">{props.text}</button>
	}
};

export default Button;
