import React, { useState } from 'react';
import { IArtwork } from '../interfaces/IArtwork';
import * as artworkServices from '../services/ArtworkService';
import { View, Image, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList, StyleSheet } from 'react-native';
//import styles from "../styles"

interface ArtworkCardProps {
  artwork: IArtwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const [likesCount, setLikesCount] = useState(artwork.likesCount);

  const handleLike = async () => {
    try {
      await artworkServices.likeArtwork(artwork.id.toString());
      const updatedArtwork = await artworkServices.getArtworkById(artwork.id.toString());
      setLikesCount(updatedArtwork.likesCount);
      console.log(updatedArtwork);
    } catch (error) {
      console.error("Error:", error);
    }  
  };

  const handleBookmark = async () => {
    await artworkServices.bookmarkArtwork(artwork.id.toString());
  };

  const handleTip = async () => {
    await artworkServices.tipArtwork(artwork.id.toString());
  };

  return (
    <View style={stylesCard.item}>
      <Text style={{color: '#ffffff', marginBottom: 10, textAlign: 'left'}}>@{artwork.artist}</Text>
      <Image source={{ uri: artwork.imageURL }} style={stylesCard.image} />
      <Text style={{color: '#ffffff'}}>{artwork.title}</Text>
      <Text style={{color: '#ffffff'}}>{likesCount} likes</Text>
      <View style={stylesCard.buttonContainer}>
        <TouchableOpacity style={stylesCard.buttonC} onPress={handleLike}>
          <Text style={{color: '#ffffff'}}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCard.buttonC} onPress={handleBookmark}>
          <Text style={{color: '#ffffff'}}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesCard.buttonC} onPress={handleTip}>
          <Text style={{color: '#ffffff'}}>Tip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesCard = StyleSheet.create({
  buttonC: {
    flex: 1,
    height: 40,
    backgroundColor: '#EA4C2B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  item: {
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    //alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 16 / 9, // Adjust the aspect ratio as needed
    borderRadius: 10,
    resizeMode: 'cover',
  },
  
})


export default ArtworkCard;
