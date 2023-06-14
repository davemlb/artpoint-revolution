import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';
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
  const handleFacebookSignup = () => {
    // Perform facebook login logic here
    Alert.alert(`Logging in with facebook`);
  };
  
  const handleAppleLogin = () => {
    // Perform apple login logic here
    Alert.alert(`Logging in with apple`);
  };
  
  const handleGoogleLogin = () => {
    // Perform google login logic here
    Alert.alert(`Logging in with google`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Munch ArtPoint</Text>
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
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookSignup}>
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
        <Text style={styles.appleButtonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
