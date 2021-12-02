function Button(props) {
	return <a href={props.url} className={props.class}>{props.text}</a>;
}

export default Button;
