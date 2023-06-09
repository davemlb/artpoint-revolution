// ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const ProfileScreen = () => {
  const user = useContext(UserContext);

  if (!user) {
    // handle the case where no user is logged in
    return null;
  }

  return (
    <View>
      <Text>{user.username}</Text>
      {/* render user's artworks here */}
    </View>
  );
};

export default ProfileScreen;