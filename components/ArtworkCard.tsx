import React from 'react';
import { IArtwork } from '../interfaces/IArtwork';
import * as artworkServices from '../services/ArtworkService';
import { View, Image, Text, Button, StyleSheet } from 'react-native';


interface ArtworkCardProps {
  artwork: IArtwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
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
      <Image style={styles.image} source={{uri: artwork.imageURL}}  />
      <Text>{artwork.artist}</Text>
      <Button title="Like" onPress={handleLike} />
      <Button title="Bookmark" onPress={handleBookmark} />
      <Button title="Tip" onPress={handleTip} />
    </View>
  );
  
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    // Add additional styling properties as needed
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
    // Add additional styling properties as needed
  },
});


export default ArtworkCard;
