import {launchImageLibrary, MediaType} from 'react-native-image-picker';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { Button, TextInput, View } from 'react-native';

const PostForm = () => {
  const [text, setText] = useState('');
  const [image, setImage] = React.useState<string | null>(null);



  const selectImage = () => {

    const options = {
      mediaType: 'photo' as MediaType 
    }
    
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        const uri = selectedAsset?.uri; 
  
        if (uri) {
          setImage(uri);
        } else {
          setImage(null);
        }
      }
    });
  };

  const submitPost = async () => {
    try {
      // format post data
      const postData = new FormData();
      postData.append('text', text);
      if (image) {
        postData.append('image', {
          uri: image,
          type: 'image/jpeg',
          name: 'post-image.jpg',
        } as any);
      }

      // make API request
      const response = await axios.post('/api/posts', postData);

      // handle successful post creation 
    } catch (error) {
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="What's on your mind?"
      />
      <Button title="Select Image" onPress={selectImage} />
      <Button title="Submit Post" onPress={submitPost} />
    </View>
  );
};
