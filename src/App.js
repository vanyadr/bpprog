import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Icon24Services } from '@vkontakte/icons';

import Home from './panels/Home';
import Prof from './panels/Prof';
import Birzh from './panels/Birzh';
import Cal from './panels/Cal';
import Home1 from './panels/Home1';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Prof id='prof' go={go} />
					<Birzh id='birzh' go={go} />
					<Cal id='cal' go={go} />
					<Home1 id='home1' fetchedUser={fetchedUser} go={go} />

				</View>
			</AppRoot>
		</AdaptivityProvider>


	);


	// return (
	//   <Epic activeStory={activeStory} tabbar={
	//     <Tabbar>
	//       <TabbarItem
	//         onClick={() => setActiveStory('home')}
	//         selected={activeStory === 'home'}
	//         data-story="home"
	//         text="Главная"
	//       ><Icon24Services /></TabbarItem>
	//     </Tabbar>
	//   }>
	//     <View id="home" activePanel="home">
	// 	  <Panel id="home">
	// 	    <PanelHeader>Главная</PanelHeader>
	// 	    <UserInfo />
	// 	  </Panel>
	// 	</View>
	//   </Epic>
	// );

}

export default App;

