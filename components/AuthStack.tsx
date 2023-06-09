import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadButton from '../screens/UploadButton';
import LogIn from './LogIn'
import Signup from './Signup';

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LogIn} />
      <AuthStack.Screen name="Register" component={Signup} />
    </AuthStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      <Tab.Screen name="UploadScreen" component={UploadButton} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false); // add a state

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <TabNavigator />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
}
