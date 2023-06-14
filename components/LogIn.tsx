import React, { useState, useContext } from 'react';
import { Button, TextInput, View, Alert, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
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

  const handleFacebookLogin = () => {
    Alert.alert(`Logging in with facebook`);
  };

  const handleAppleLogin = () => {
    Alert.alert(`Logging in with apple`);
  };

  const handleGoogleLogin = () => {
    Alert.alert(`Logging in with google`);
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Munch ArtPoint</Text>
      <Text style={styles.labelText}>Username / Email</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={'Username'}
        style={styles.input}
      />
      <Text style={styles.label2Text}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity style={{backgroundColor: "#EA4C2B", padding: 10, borderRadius: 20}} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookLogin}>
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleLogin}>
        <Text style={styles.appleButtonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get('window');
// const iPhone14Width = 428;
// const iPhone14Height = 926;
// const widthRatio = width / iPhone14Width;
// const heightRatio = height / iPhone14Height;
// const stylesL = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     width: widthRatio * 151,
//     height: widthRatio * 31,
//     left: widthRatio * 95,
//     top: widthRatio * 510,
//     backgroundColor: '#EA4C2B',
//     justifyContent: 'center',
//     borderRadius: widthRatio * 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     zIndex: 1,
//     position: 'relative',
//     top: widthRatio * 100, // Adjust the positioning as needed
//   },
// })