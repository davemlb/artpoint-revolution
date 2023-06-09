import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Signup = ({ navigation } : {navigation: NavigationProp<ParamListBase>}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    try {
      const response = await fetch('http://your-server-address/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        Alert.alert('Signup successful');
        // Navigate back to Login screen after successful signup
        navigation.navigate('Login');
      } else {
        Alert.alert('Signup failed');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Signup failed');
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={signup} />
    </View>
  );
};

export default Signup;
