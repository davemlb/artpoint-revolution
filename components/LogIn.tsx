import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const Login = ({ navigation } : {navigation: NavigationProp<ParamListBase>}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await fetch(`https://localhost:3001/api/users/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
  
      // This is insecure and should NOT be done
      if (data.password === password) {
        // Navigate to HomeScreen after successful login
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Login failed');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Login failed');
    }
  };
  

  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={login} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;


