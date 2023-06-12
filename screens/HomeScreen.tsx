import React, { useEffect, useState } from 'react';
import { getArtworks } from '../services/ArtworkService';
import ArtworkList from '../components/ArtworkList';

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
    <div>
      <ArtworkList artworks={artworks} />
    </div>
  );
};

export default HomeScreen;
