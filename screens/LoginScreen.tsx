import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';
import * as navigation from '../components/LogIn'

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you would typically handle the login logic
    console.log(username, password);
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

