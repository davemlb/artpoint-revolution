// ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import UserProfile from '../components/UserProfile';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles';

const ProfileScreen = () => {
  const context = useContext(UserContext);

  // If context is undefined, it means UserContext.Provider was not found in the tree
  if (!context) {
    throw new Error('UserContext.Provider not found');
  }

  const { user } = context;

  if (!user) {
    // handle the case where no user is logged in
    return null;
  }

  return (
    <ScrollView>
      <UserProfile user={user} />
    </ScrollView>
  );
};

export default ProfileScreen;
