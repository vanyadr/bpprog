import React from 'react';
import PropTypes from 'prop-types';


import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, withAdaptivity, ViewWidth, usePlatform, VKCOM, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, View, PanelHeaderBack, Placeholder, Badge, CardGrid, ContentCard } from '@vkontakte/vkui';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon56NewsfeedOutline from '@vkontakte/icons/dist/56/newsfeed_outline';

import '@vkontakte/vkui/dist/vkui.css';

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

const Example = withAdaptivity(({ viewWidth, id, icon, fetchedUser }) => {
	const platform = usePlatform();
	const [activeStory, setActiveStory] = React.useState('profile');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isDesktop = viewWidth >= ViewWidth.TABLET;
	const hasHeader = platform !== VKCOM;
	fetchedUser: null;

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
						><Icon28NewsfeedOutline /></TabbarItem>
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
						><Icon28MessageOutline /></TabbarItem>
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
							<PanelHeader right={<PanelHeaderBack />}>Биржа</PanelHeader>
							<Group style={{ height: '1000px' }}>
								<CardGrid size="l">
									<ContentCard
										subtitle="Новость 1"
										header="Открытие приложения!"
										text="Всех приглашаем на открытие нашего нового приложения volunteer!"
									/>
									<ContentCard
										image='https://s...content-available-to-author-only...i.com/impg/GZSFksQbfybb8DvpBrhEYYr6GahJ6ucjzWhd0A/K_gfXe2zlmA.jpg?size=984x984&quality=96&sign=63e1b6cc1759b35d38b2061e5c993bbd&type=album'
										subtitle="Раздел: новости о приложении"
										header="Появление иконки volunteer"
										text="Представляем вашему вниманию иконку приложения volunteer"
										maxHeight={500}
									/>
									<ContentCard
										image='https://p...content-available-to-author-only...i.com/c505536/u344574162/docs/d7/0c114885518b/Profile_Ivan_5.png?extra=ecIAbj71ybbkYSnPiWvxLj_wLXIS8HeXEkF576W2EgsJ_aEzS_nFQy305gPaRqy-mMWzaBMSnNn3Y5PJcPyzlb28i2c72emsHjBqpJ0rALFEbRBZzVmfG_T1dkWvevocGUbGZDdg8ymOYzB9dshNZg'
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
										caption='Адрес: ул. Макарова 24; 
										Баллы: 75'
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
							<PanelHeader right={<PanelHeaderBack />}>Календарь</PanelHeader>
							<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28MessageOutline width={56} height={56} />}>
								</Placeholder>
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
							<PanelHeader right={<PanelHeaderBack />}>Профиль</PanelHeader>
							<Group style={{ height: '1000px' }}>
								{/* <Placeholder > */}
								{fetchedUser &&
									<Group header={<Header mode="secondary">Данные о профиле</Header>}>
										<Cell
											before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
											description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
										>
											{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
										</Cell>
									</Group>}
								{/* </Placeholder> */}
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


