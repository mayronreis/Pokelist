import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../pages/Main';
import PokemonDetails from '../pages/PokemonDetails';

const Auth = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
  initialRouteName="Main"
  screenOptions={{
    headerShown: false,
  }} >
    <Auth.Screen name="Main" component={Main} />
    <Auth.Screen name="PokemonDetails" component={PokemonDetails} />
  </Auth.Navigator>
);

export default AppRoutes;
