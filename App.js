import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Player } from './screens';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='Home'
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Player' component={Player} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
