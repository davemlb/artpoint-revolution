import React from 'react';
import { View, Text, Image } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';



const ArtworkItem = ({ artwork }: { artwork: IArtwork }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <Image source={{ uri: artwork.imageURL }} style={{ width: 50, height: 50 }} />
      <View style={{ marginLeft: 10 }}>
        <Text>{artwork.title}</Text>
        <Text>By: {artwork.user}</Text>
        <Text>Likes: {artwork.likes}</Text>
      </View>
    </View>
  );
};

export default ArtworkItem;
