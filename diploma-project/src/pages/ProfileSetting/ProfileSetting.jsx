import Container from './components/Container/Container.jsx';
import HeaderMain from './components/HeaderMain/HeaderMain.jsx';
import Button from './components/Button/Button.jsx';
import Footer from './components/Footer/Footer.jsx';
import EditPhotoProfile from './components/EditPhotoProfile/EditPhotoProfile.jsx';
import photo from './assets/img/users/woman/1.jpg';
import Input from './components/Input/Input.jsx';
import Gender from './components/Gender/Gender.jsx';


function ProfileSetting() {
	return (
		<div>
			<HeaderMain />
			<Container>
				<Button type='link' url='/' className='button button_outline button_big' text='Назад' />
				<div className='profile-setting-wrapper'>
					<EditPhotoProfile url={photo} />

					<form className='profile-setting__form' action="" method="post">
						<h2 className='profile-setting__title'>Личная информация</h2>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>Имя</span>
							<Input type='text' placeholder='Ваше имя' value='Jessie' icoBefore='' input='' icoAfter='' />
						</div>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>Фамилия</span>
							<Input type='text' placeholder='Ваша фамилия' value='Rogers' icoBefore='' input='' icoAfter='' />
						</div>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>Возраст</span>
							<Input type='text' placeholder='Ваш возраст' icoBefore='ser' input='input_error' icoAfter='input_error' />
						</div>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>О себе</span>
							<Input type='textarea' placeholder='Напишите о себе' value='' input='' icoAfter='' />
						</div>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>Пол</span>
							<div className='profile-setting__gender'>
								<Gender gender='man' isCondition='false' />
								<Gender gender='woman' isCondition='true' />
							</div>
						</div>

						<h2 className='profile-setting__title'>Аккаунт</h2>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>E-mail</span>
							<Input type='email' placeholder='Введите e-mail' icoBefore='' input='' icoAfter='' />
						</div>

						<div className='profile-setting__inputs'>
							<span className='profile-setting__name'>Пароль</span>
							<Input type='password' placeholder='Введите пароль' icoBefore='' input='' icoAfter='input_eye' />
						</div>

						<div className='profile-setting__button'>
							<Button type='button' url='/' className='button button_big button_colored' text='Сохранить' />
						</div>

					</form>
				</div>
			</Container>
			<Footer />		</div>
	);
}

export default ProfileSetting;
