
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
//import CompetitionScreen from './screens/CompetitionScreen';
import ProfileScreen from './screens/ProfileScreen';
import UploadScreen from './screens/UploadButton';
import Login from './components/LogIn';
import Signup from './components/Signup'; 
import LoginScreen from './screens/LoginScreen';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{/*<AuthStack.Screen name="Register" component={Signup} />*/}

const MainTabsScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
    {/*<Tab.Screen name="CompetitionScreen" component={CompetitionScreen} />*/}
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    <Tab.Screen name="UploadScreen" component={UploadScreen} />
  </Tab.Navigator>
);



