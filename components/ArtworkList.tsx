import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import * as artworkServices from '../services/ArtworkService';
import ArtworkCard from './ArtworkCard';

interface ArtworkListProps {
  artworks: IArtwork[];
}

const ArtworkList: React.FC<ArtworkListProps> = ({ artworks }) => {
  useEffect(() => {
    fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
      .then(data => {
        // You can perform any additional logic with the fetched data here
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {artworks?.map((artwork: IArtwork) => (
        <ArtworkCard key={artwork.id.toString()} artwork={artwork} />
      ))}
    </View>
  );
};

export default ArtworkList;
