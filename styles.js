import { StyleSheet, Dimensions, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');
const iPhone14Width = 428;
const iPhone14Height = 926;
const widthRatio = width / iPhone14Width;
const heightRatio = height / iPhone14Height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  input: {
    width: widthRatio * 350,
    height: widthRatio * 40,
    padding: widthRatio * 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginBottom: widthRatio * 50,
    borderRadius: widthRatio * 10,
  },
  labelText: {
    color: 'white',
    fontSize: widthRatio * 18,
    right: widthRatio * 125,
    top: widthRatio * 15,
  },
  label2Text: {
    color: 'white',
    fontSize: widthRatio * 18,
    right: widthRatio * 150,
    top: widthRatio * 90,
  },
  headerText: {
    color: '#EA4C2B',
    fontSize: widthRatio * 40,
    height: widthRatio * 100,
  },
  button: {
    position: 'absolute',
    width: widthRatio * 151,
    height: widthRatio * 31,
    left: widthRatio * 95,
    top: widthRatio * 510,
    backgroundColor: '#EA4C2B',
    justifyContent: 'center',
    borderRadius: widthRatio * 20,
  },
  buttonText: {
    color: 'white',
    left: widthRatio * 55,
  },
  facebookButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 80,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  facebookButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  appleButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 90,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  appleButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  googleButton: {
    width: widthRatio * 350,
    height: widthRatio * 45,
    top: widthRatio * 100,
    backgroundColor: '#4B4848',
    borderRadius: widthRatio * 10,
  },
  googleButtonText: {
    color: 'white',
    padding: widthRatio * 10,
  },
  signUpButton: {
    top: widthRatio * 120,
    right: widthRatio * 150,
    color: 'white',
  },
  signUpButtonText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  item: {
    backgroundColor: 'black',
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    zIndex: 1,
  },
  likes: {
    color: 'grey',
    fontSize: 14,
    left: 40, 
  },
  artworkImage: {
    width: 150,
    height: 200,
    marginRight: 20,
    borderRadius: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'gray',
    margin: 20
    
}});

export default styles;