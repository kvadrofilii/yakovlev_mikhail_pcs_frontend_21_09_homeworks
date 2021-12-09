import Button from '../components/Button.jsx';
import EditPhotoPerson from '../components/EditPhotoPerson.jsx';
import photo from '../assets/img/users/woman/1.jpg';
import Input from '../components/Input.jsx';
import Gender from '../components/Gender.jsx';


function PersonSetting() {
	return (
		<div>
			<Button type='link' url='/' className='button button_outline button_big' text='Назад' />
			<div className='person-setting-wrapper'>
				<EditPhotoPerson url={photo} />

				<form className='person-setting__form' action="" method="post">
					<h2 className='person-setting__title'>Личная информация</h2>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>Имя</span>
						<Input type='text' placeholder='Ваше имя' value='Jessie' icoBefore='' input='' icoAfter='' />
					</div>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>Фамилия</span>
						<Input type='text' placeholder='Ваша фамилия' value='Rogers' icoBefore='' input='' icoAfter='' />
					</div>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>Возраст</span>
						<Input type='text' placeholder='Ваш возраст' icoBefore='ser' input='input_error' icoAfter='input_error' />
					</div>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>О себе</span>
						<Input type='textarea' placeholder='Напишите о себе' value='' input='' icoAfter='' />
					</div>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>Пол</span>
						<div className='person-setting__gender'>
							<Gender gender='man' isCondition='false' />
							<Gender gender='woman' isCondition='true' />
						</div>
					</div>

					<h2 className='person-setting__title'>Аккаунт</h2>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>E-mail</span>
						<Input type='email' placeholder='Введите e-mail' icoBefore='' input='' icoAfter='' />
					</div>

					<div className='person-setting__inputs'>
						<span className='person-setting__name'>Пароль</span>
						<Input type='password' placeholder='Введите пароль' icoBefore='' input='' icoAfter='input_eye' />
					</div>

					<div className='person-setting__button'>
						<Button type='button' url='/' className='button button_big button_colored' text='Сохранить' />
					</div>

				</form>
			</div>
		</div>
	);
}

export default PersonSetting;
