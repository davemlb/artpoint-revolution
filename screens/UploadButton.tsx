import { uploadArtwork } from '../services/ArtworkService';
import { IArtwork } from '../interfaces/IArtwork';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const UploadButton = () => {
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleUpload = async () => {
    const artwork: IArtwork = {
      title,
      imageURL,
      image: '...',
      user: '...',
      likes: 0,
      id: '...',
      likesCount: 0,
      artist: ''
    };
    ;

    const result = await uploadArtwork(artwork);
    console.log(result);
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        onChangeText={text => setTitle(text)}
        defaultValue={title}
      />
      <TextInput
        placeholder="Image URL"
        onChangeText={text => setImageURL(text)}
        defaultValue={imageURL}
      />
      <Button
        title="Upload Artwork"
        onPress={handleUpload}
      />
    </View>
  );
};

export default UploadButton;
