import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, FetchedUser, Button, Group, Cell, Div, Title, Avatar, withAdaptivity, SizeType, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderBack, Placeholder, Gradient, Text, Badge, CardGrid, ContentCard } from '@vkontakte/vkui';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon56NewsfeedOutline  from '@vkontakte/icons/dist/56/newsfeed_outline';
import { Icon16TearOffFlyerOutline } from '@vkontakte/icons';
import { Icon12ClockOutline } from '@vkontakte/icons';
import { Icon28BillheadOutline } from '@vkontakte/icons';
import { Icon28GridLayoutOutline } from '@vkontakte/icons';

import '@vkontakte/vkui/dist/vkui.css';

import persik from '../img/persik.png';
import './Persik.css';

// import React from 'react';
// import PropTypes from 'prop-types';

// import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';


// const Home = ({ id, go, fetchedUser }) => (
// 	<Panel id={id}>
// 		<PanelHeader>Пример главной страницы</PanelHeader>

// 		<Group header={<Header mode="secondary"></Header>}>
// 			<Div>
// 				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
// 					Посмотреть профиль
// 				</Button>
// 			</Div>
// 		</Group>
// 	</Panel>
// );

const Example = withAdaptivity(({ viewWidth, id, icon, fetchedUser, sizeX, props }) => {
	const platform = usePlatform();
	const [activeStory, setActiveStory] = React.useState('profile');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isDesktop = viewWidth >= ViewWidth.TABLET;
	const hasHeader = platform !== VKCOM;
  
	return (
	  <SplitLayout
		header={hasHeader && <PanelHeader separator={false} />}
		style={{ justifyContent: "center" }}
	  >
		{isDesktop && (
		  <SplitCol fixed width="280px" maxWidth="280px">
			<Panel>
			  {hasHeader && <PanelHeader />}
			  <Group>
				<Cell
				  disabled={activeStory === 'feed'}
				  style={activeStory === 'feed' ? {
					backgroundColor: "var(--button_secondary_background)",
					borderRadius: 8
				  } : {}}
				  data-story="feed"
				  onClick={onStoryChange}
				  before={<Icon28NewsfeedOutline />}
				>
				  feed
				</Cell>
				{/* <Cell
				  disabled={activeStory === 'services'}
				  style={activeStory === 'services' ? {
					backgroundColor: "var(--button_secondary_background)",
					borderRadius: 8
				  } : {}}
				  data-story="services"
				  onClick={onStoryChange}
				  before={<Icon28ServicesOutline />}
				>
				  services
				</Cell> */}
				<Cell
				  disabled={activeStory === 'messages'}
				  style={activeStory === 'messages' ? {
					backgroundColor: "var(--button_secondary_background)",
					borderRadius: 8
				  } : {}}
				  data-story="messages"
				  onClick={onStoryChange}
				  before={<Icon28MessageOutline />}
				>
				  messages
				</Cell>
				{/* <Cell
				  disabled={activeStory === 'clips'}
				  style={activeStory === 'clips' ? {
					backgroundColor: "var(--button_secondary_background)",
					borderRadius: 8
				  } : {}}
				  data-story="clips"
				  onClick={onStoryChange}
				  before={<Icon28ClipOutline />}
				>
				  clips
				</Cell> */}
				<Cell
				  disabled={activeStory === 'profile'}
				  style={activeStory === 'profile' ? {
					backgroundColor: "var(--button_secondary_background)",
					borderRadius: 8
				  } : {}}
				  data-story="profile"
				  onClick={onStoryChange}
				  before={<Icon28UserCircleOutline />}
				>
				  profile
				</Cell>
			  </Group>
			</Panel>
		  </SplitCol>
		)}
  
		<SplitCol
		  animate={!isDesktop}
		  spaced={isDesktop}
		  width={isDesktop ? '560px' : '100%'}
		  maxWidth={isDesktop ? '560px' : '100%'}
		>
		  <Epic activeStory={activeStory} tabbar={!isDesktop &&
			<Tabbar>
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'feed'}
				data-story="feed"
				text="Биржа"
			  ><Icon28GridLayoutOutline /></TabbarItem>
			  {/* <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'services'}
				data-story="services"
				text="Сервисы"
			  ><Icon28ServicesOutline/></TabbarItem> */}
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'messages'}
				data-story="messages"
				text="Календарь"
			  ><Icon28BillheadOutline /></TabbarItem>
			  {/* <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'clips'}
				data-story="clips"
				text="Клипы"
			  ><Icon28ClipOutline /></TabbarItem> */}
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'profile'}
				data-story="profile"
				text="Профиль"
			  ><Icon28UserCircleOutline /></TabbarItem>
			</Tabbar>
		  }>
			<View id="feed" activePanel="feed">
			  <Panel id="feed">
				<PanelHeader>Биржа</PanelHeader>
				<Group>
								<CardGrid size="l">
									<ContentCard
										subtitle="Раздел: новости о приложении"
										header="Открытие приложения!"
										text="Всех приглашаем на открытие нашего нового приложения volunteer!"
									/>
									<ContentCard
										image='https://tehnocentr.ru/img/2dpr_img/53095.jpg'
										subtitle="Раздел: новости о приложении"
										header="Появление иконки volunteer"
										text="Представляем вашему вниманию иконку приложения volunteer"
										maxHeight={500}
									/>
									<ContentCard
										image='https://bt-detali.ru/31671-thickbox_default/%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81%D0%B0-samsung-88-%D1%81%D0%B5%D1%80%D0%B8%D0%B8-dj64-01014a.jpg'
										subtitle="Раздел: новости о приложении"
										header="Показ дизайн приложения volunteer"
										text="14 июля команда volunteer показывает первый основной дизайн своего приложения. С нетерпением ждём!"
										maxHeight={1400}
									/>
 
									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Сбор мусора в Центральном Парке"
										text="В центральном парке нужно собрать бутылки и пластик после коцерта"
										caption='Баллы: 25'
										maxHeight={500}
									/>
									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь пожилым людям в доме пристарелых"
										text="Пожилым людям в доме пристарелых на улице Макарова нужна помощь в ремноте со здании."
										caption='Адрес: ул. Макарова 24; Баллы: 75'
										maxHeight={500}
									/>
									<ContentCard
										subtitle="Раздел: задания на Бирже"
										header="Помощь местной рыбной компании очистить водоём от мусора"
										text="Компания по производству рыбных изделий просит помощи в очистке водоёма от пластика и мусора"
										caption='Адрес: ул. Морская 25А; Баллы: 150'
										maxHeight={750}
									/>
								</CardGrid>
				    <img className="Persik" src={persik} alt="Persik The Cat"/>
				</Group>
			  </Panel>
			</View>
			{/* <View id="services" activePanel="services">
			  <Panel id="services">
				<PanelHeader left={<PanelHeaderBack />}>Сервисы</PanelHeader>
				<Group style={{ height: '1000px' }}>
				  <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}>
				  </Placeholder>
				</Group>
			  </Panel>
			</View> */}
			<View id="messages" activePanel="messages">
			  <Panel id="messages">
				<PanelHeader>Календарь</PanelHeader>
				<Group>
				  <img className="Persik" src={persik} alt="Persik The Cat"/>
				</Group>

			  </Panel>
			</View>
			{/* <View id="clips" activePanel="clips">
			  <Panel id="clips">
				<PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
				<Group style={{ height: '1000px' }}>
				  <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}>
				  </Placeholder>
				</Group>
			  </Panel>
			</View> */}
			<View id="profile" activePanel="profile">
			  <Panel id="profile">
				<PanelHeader>Профиль</PanelHeader>
				<Group>
					{fetchedUser &&
					  <Gradient style={{
					    margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
					    display: 'flex',
					    flexDirection: 'column',
					    alignItems: 'center',
					    justifyContent: 'center',
					    textAlign: 'center',
					    padding: 32,
					  }}>
					    {fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Title>
					    <Text style={{ marginBottom: 8, color: 'var(--text_primary)' }}>{fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}</Text>
					    <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Я офигел, что так вот получилось! Пробуем писать длинный текст, посмотри как вк его перенесет. На удивление, вк очень умный и хорошо переносит длинные тексты, чтобы те помещались на экран устройства</Text>
					    <img className="Persik" src={persik} alt="Persik The Cat"/>
					  </Gradient>}
				</Group>
			  </Panel>
			</View>
		  </Epic>
		</SplitCol>
	  </SplitLayout>
	);
  }, {
	viewWidth: true
  });

Example.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Example;


