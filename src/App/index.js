import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { linking } from '../helpers/navigation';

import Home from '../pages';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;