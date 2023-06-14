import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getSortedArtworks } from '../services/ArtworkService';
import LeaderboardCard from '../components/LeaderboardCard';
import styles from '../styles';
import { useFocusEffect } from '@react-navigation/native';

const LeaderboardScreen = () => {
  const [artworks, setArtworks] = useState([]);

  useFocusEffect(
    useCallback(() => {

      fetchArtworks();
    }, [])
  );

  const fetchArtworks = async () => {

      const artworks = await getSortedArtworks();
      setArtworks(artworks);
  };

  return (
    <ScrollView style={{backgroundColor: "black"}}>
      {artworks.map((artwork) => (
        <LeaderboardCard key={artwork} artwork={artwork} />
      ))}
    </ScrollView>
  );
};

export default LeaderboardScreen;
