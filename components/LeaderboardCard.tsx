import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import * as ArtworkService from '../services/ArtworkService';
import styles from "../styles"

interface LeaderboardCardProps {
  artwork: IArtwork;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ artwork }) => {
  return (
    <View style={stylesCard.item}>
      <Image source={{ uri: artwork.imageURL }} style={stylesCard.artworkImage} />

      {/* <Text style={stylesCard.artist }>@{artwork.artist}</Text>
      <Text style={stylesCard.likes}>{artwork.likesCount} likes</Text> */}
      <View style={stylesCard.textContainer}>
        <Text style={stylesCard.artist}>@{artwork.artist}</Text>
        <Text style={stylesCard.likes}>{artwork.likesCount} likes</Text>
      </View>
    </View>
  );
};

// const stylesCard = StyleSheet.create({
//   item: {
//     backgroundColor: 'black',
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//     //alignItems: 'center',
//   },
// })

const stylesCard = StyleSheet.create({
  item: {
    backgroundColor: '#181818',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  artist: {
    color: '#ffffff',
    marginBottom: 10,
    flex: 1,
  },
  likes: {
    color: '#ffffff',
    marginLeft: 20,
  },
  artworkImage: {
    width: 150,
    height: 200,
    marginRight: 20,
    borderRadius: 20,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
});

export default LeaderboardCard;