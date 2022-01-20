import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import theme from './styles/theme';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#f2f2" />
      <ThemeProvider theme={theme}>
        <View style={{flex: 1}}>
            <Routes />
        </View>
      </ThemeProvider>
  </NavigationContainer>
);

export default App;
