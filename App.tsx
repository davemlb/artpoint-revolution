import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/Signup';
import LoginScreen from './screens/LoginScreen';
import { Navbar } from './components/shared/NavigationBar';
import HomeScreen from './screens/HomeScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
