import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/Signup';
import LoginScreen from './screens/LoginScreen';
import { Navbar } from './components/shared/NavigationBar';
import { UserProvider } from './contexts/UserContext';
import HomeScreen from './screens/HomeScreen';
import { View } from 'react-native';
import LogIn from './components/LogIn';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  
  );
}
