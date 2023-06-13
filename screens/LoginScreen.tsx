import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { login } from '../services/AuthService';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  const handleLogin = () => {
    // Here you would typically handle the login logic
    console.log(username, password);
    navigation.navigate('HomeScreen'); // Navigate to HomeScreen after login
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
