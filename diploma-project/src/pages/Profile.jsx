import Container from '../components/Container.jsx';
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';
import PhotoProfile from '../components/PhotoProfile.jsx';
import photo from '../assets/img/users/woman/1.jpg';


function Profile() {
	return (
		<div>
			<Header page='main' />
			<Container>
				<Button type='link' url='/' className='button button_outline button_big' text='Назад' />
				<div className='profile-wrapper'>
					<PhotoProfile url={photo} alt='' />
					<div className='profile__content-wrapper'>
						<h2 className='profile__title'>Jessie 22</h2>
						<Button type='button' url='/' className='button button_colored button_small' text='Поприветствовать' />
						<h3 className='profile__about-us'>О себе</h3>
						<p>А кого хочу встретить знаю, в себе уверен. Разовый секс не интересен. На первом месте взаимопонимание, уважение, доверие, а за тем любовь. Прежде всего я ЧЕЛОВЕК со своими плюсами и минусами. ДА! Забыл про ВКЛАД в Швейцарском Банке и нефтяную скважину) – актуально, нет денег – нет спроса). Идеальных людей нет. Если вы здесь не „на работе“ или просто делать нечего, повышаете себе самооценку, или убиваете время, так как в реале многие уже, наверное, разучились общаться в живую, да и домашним уже не до вас… Запишитесь на курсы макраме…) Никого не хочу обидеть, все вы достойны уважения. Вы все достойны лучшего, главное планку свою не завышать относительно Реальности. PS: Для тех кого интересует только статус, благосостояние и меркантильный интерес, отвечаю: за границей не был, не привлекался, не участвовал, автомобиль отечественный, квартиру снимаю, работаю в жилконторе, „лужу паяю, утюги починяю“ (работу люблю) …на кухне равных нет, на швейной машинке крестиком вышиваю…Руки не золотые, но контакты платиновые) По жизни, в работе и в быту самодостаточен и состоялся. Прежние семейные отношения себя изжили, но думаю, что расстались мы из-за лени и по глупости. Подробнее в Автопортрете.</p>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Profile;
