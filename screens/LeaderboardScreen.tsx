import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getSortedArtworks } from '../services/ArtworkService';
import LeaderboardCard from '../components/LeaderboardCard';
import styles from '../styles';

const LeaderboardScreen = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const artworks = await getSortedArtworks();
      setArtworks(artworks);
    };

    fetchArtworks();
  }, []);

  return (
    <ScrollView>
      {artworks.map((artwork) => (
        <LeaderboardCard key={artwork} artwork={artwork} />
      ))}
    </ScrollView>
  );
};

export default LeaderboardScreen;
