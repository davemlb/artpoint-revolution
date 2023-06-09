import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
//import CompetitionScreen from '../screens/CompetitionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadButton from '../screens/UploadButton';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      {/*<Tab.Screen name="CompetitionScreen" component={CompetitionScreen} />*/}
      <Tab.Screen name="UploadScreen" component={UploadButton} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
