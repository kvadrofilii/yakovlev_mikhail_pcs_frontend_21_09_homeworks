import email from '../../assets/svg/email.svg';
import password from '../../assets/svg/password.svg';
import user from '../../assets/svg/user.svg';
import error from '../../assets/svg/error.svg';
import eye from '../../assets/svg/eye.svg';

function Input({ type = 'email', placeholder = '' }) {

	let before,
		after,
		size;

	if (type === 'email') {
		before = email;
		after = error;
		size = 24;
	} else if (type === 'password') {
		before = password;
		after = eye;
		size = 20;
	} else if (type === 'user') {
		before = user;
		size = 0;
	}

	return (
		<div className='input-wrapper'>
			<span className='ico-before' style={{ background: `url(${before})` }}></span>
			<input className='input' type={type} placeholder={placeholder} />
			<span className='ico-after' style={{
				background: `url(${after})`,
				height: size,
				width: size
			}}></span >
		</div >
	);
}

export default Input;
