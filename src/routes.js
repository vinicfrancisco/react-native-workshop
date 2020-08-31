import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

const App = createStackNavigator();

export default function Routes() {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#312e38'},
      }}>
      <App.Screen component={Home} name="Home" />
      <App.Screen component={Repositories} name="Repositories" />
    </App.Navigator>
  );
}
