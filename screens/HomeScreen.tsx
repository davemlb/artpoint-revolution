import React, { useEffect, useState } from 'react';
import { getArtworks } from '../services/ArtworkService';
import ArtworkList from '../components/ArtworkList';
import { ScrollView, View } from 'react-native';

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
      <ArtworkList artworks={artworks} />
    </ScrollView>
  );
};

export default HomeScreen;
