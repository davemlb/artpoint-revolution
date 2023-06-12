import React, {useState} from 'react';
import {Button, View, TextInput, Alert} from 'react-native';
import { Image } from 'react-native';
import {launchImageLibrary, MediaType} from 'react-native-image-picker';

interface IPostArtworkProps {
  onSubmit: (data: { title: string, imageUri: { uri: string } }) => void;  // replace with the actual type of your onSubmit function
}

export default function PostArtwork({onSubmit}: IPostArtworkProps) {
  const [title, setTitle] = useState('');
  const [imageUri, setImageUri] = useState<{ uri: string } | null>(null);


  function handleChooseImage() {
    const options = {
      mediaType: 'photo' as MediaType,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri || '' };
        setImageUri(source);
      } else {
        console.log('No image selected');
      }
      
    });
  }

  function handleSubmit() {
    if (!title.trim()) {
      Alert.alert('Please add a title');
    } else if (!imageUri) {
      Alert.alert('Please choose an image');
    } else {
      onSubmit({title, imageUri});
    }
  }

  return (
    <View>
      <TextInput
        value={title}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Choose Image" onPress={handleChooseImage} />
      {imageUri && <Image source={imageUri} style={{width: 100, height: 100}} />}
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
}

