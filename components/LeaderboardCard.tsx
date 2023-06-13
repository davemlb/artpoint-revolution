import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import { IArtworkLeaderboard } from '../interfaces/IArtworkLeaderboard';
import * as ArtworkService from '../services/ArtworkService'
//import styles from '../styles';

interface LeaderboardCardProps {
  artwork: IArtwork;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ artwork }) => {
  // const [likesCount, setLikesCount] = useState(0);

  // useEffect(() => {
  //   fetchLikesCount();
  // }, []);
  

  // const fetchLikesCount = async () => {
  //   const count = await ArtworkService.getLikesCount(artwork.likesCount.toString());
  //   setLikesCount(count);
  // };
  
  

  return (
    <View>
      {/* <Text>{artwork.artwork_id}</Text> */}
      <Image style={styles.image} source={{uri: artwork.imageURL}}/>
      <Text>{artwork.title}</Text>
      <Text>{artwork.likesCount}</Text>
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

export default LeaderboardCard;