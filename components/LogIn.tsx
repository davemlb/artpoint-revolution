import React, { useState, useContext } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { UserContext } from '../contexts/UserContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext is undefined');
  }

  const { setUser } = context;

  const handleLogin = async () => {
    console.log('login function called');
    try {
      const response = await fetch(`http://localhost:3001/api/users/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log("password" + password);
  
      if (data.password === password) {
        setUser({
          id: data.id,
          username: data.username,
          password: data.password,
          // ... other user properties ...
        });
        console.log("user", data);
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
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
