import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { createUser } from '../services/UserServices';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<ParamListBase>>();


  const signup = async () => {
    try {
      await createUser(username, password);
      Alert.alert('Signup successful');
      // Navigate back to Login screen after successful signup
      navigation.navigate('Login');
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
