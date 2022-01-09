import React, {useState, useEffect} from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {APP_BG_COLOR} from './src/theme/colors';
//Home
import Home from './src/components/home/Home';
import NextScreen from './src/components/home/NextScreen';
import {useDispatch, useSelector} from 'react-redux';

const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fcfcfc',
    },
  };

  
  
  const Route = () => {

    const Stack = createStackNavigator();
    const navOptionHandler = ()=>(
        {
          headerShown: false
        }
      );

   
    const HomeStack = createStackNavigator();
    const HomeStackScreen = () =>
    <HomeStack.Navigator 
        screenOptions={{
              headerShown: false,
            }}
        initialRouteName="Home">
            <HomeStack.Screen name="Home" component={Home} options={{ headerLeft: null}}/>
            <HomeStack.Screen name="NextScreen" component={NextScreen} options={{ headerLeft: null}}/>
           
    </HomeStack.Navigator>

    
  
    return (
      <NavigationContainer theme={AppTheme}>
          <HomeStackScreen />
      </NavigationContainer>
    );
  };
  
  export default Route;
