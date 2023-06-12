import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
//import CompetitionScreen from '../screens/CompetitionScreen';
import UploadButton from '../../screens/UploadButton';
import LeaderboardScreen from '../../screens/LeaderboardScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import styles from '../../styles';

const Tab = createBottomTabNavigator();

const handleOnSubmit = ({title, imageUri}: {title: string, imageUri: {uri: string}}) => {
  // Do something with title and imageUri...
  console.log(title, imageUri);
};

export function Navbar() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/*<Tab.Screen name="Competition" component={CompetitionScreen} />*/}
      <Tab.Screen name="UploadButton" component={() => <UploadButton onSubmit={handleOnSubmit} />} />
      <Tab.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
