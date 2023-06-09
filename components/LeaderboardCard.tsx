import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import * as ArtworkService from '../services/ArtworkService'

interface LeaderboardCardProps {
  artwork: IArtworkLeaderboard;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ artwork }) => {
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    fetchLikesCount();
  }, []);
  

  const fetchLikesCount = async () => {
    const count = await ArtworkService.getLikesCount(artwork.artwork_likesCount.toString());
    setLikesCount(count);
  };
  
  

  return (
    <View>
      <Text>{artwork.artwork_id}</Text>
      <Text>{artwork.id}</Text>
      <Text>{likesCount}</Text>
    </View>
  );
  
};
