import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import * as artworkServices from '../services/ArtworkService';

interface ArtCardProps {
  artwork: IArtwork;
}

export const ArtCard: React.FC<ArtCardProps> = ({ artwork }) => {
  const handleLike = async () => {

    await artworkServices.likeArtwork(artwork.id.toString());
  };

  const handleBookmark = async () => {

    await artworkServices.bookmarkArtwork(artwork.id.toString());
  };

  const handleTip = async () => {

    await artworkServices.tipArtwork(artwork.id.toString());
  };

  return (
    <View>
      <Image source={{uri: artwork.imageURL}} />
      <Text>{artwork.artist}</Text>
      <Button title="Like" onPress={handleLike} />
      <Button title="Bookmark" onPress={handleBookmark} />
      <Button title="Tip" onPress={handleTip} />
    </View>
  );
};
