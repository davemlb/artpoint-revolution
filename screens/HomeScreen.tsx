import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { getArtworks } from '../services/ArtworkService';
import {ArtCard} from '../components/ArtCard';

const HomeScreen = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const artworks = await getArtworks();
      setArtworks(artworks);
    };

    fetchArtworks();
  }, []);

  return (
    <ScrollView>
      {artworks.map((artwork) => (
        <ArtCard key={artwork} artwork={artwork} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
