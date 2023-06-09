/*import React, {useState} from 'react';
import {Button, View, TextInput, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function PostArtwork({onSubmit}) {
  const [title, setTitle] = useState('');
  const [imageUri, setImageUri] = useState(null);

  function handleChooseImage() {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        setImageUri(source);
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
*/
