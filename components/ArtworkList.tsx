import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { IArtwork } from '../interfaces/IArtwork';
import * as artworkServices from '../services/ArtworkService';

interface ArtworkCardProps {
  artwork: IArtwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const handleLike = async () => {
    await artworkServices.likeArtwork(artwork.id.toString());
  };

  const handleBookmark = async () => {
    await artworkServices.bookmarkArtwork(artwork.id.toString());
  };

  const handleTip = async () => {
    await artworkServices.tipArtwork(artwork.id.toString());
  };

  return (
    <View>
      <Image source={{uri: artwork.imageURL}} />
      <Text>{artwork.artist}</Text>
      <Button title="Like" onPress={handleLike} />
      <Button title="Bookmark" onPress={handleBookmark} />
      <Button title="Tip" onPress={handleTip} />
    </View>
  );
}

const ArtworkList = () => {
  const [artworks, setArtworks] = useState<IArtwork[]>([]);

  useEffect(() => {
    fetch('https://localhost3001/api/artworks')
      .then(response => response.json())
      .then(data => setArtworks(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <View>
      {artworks.map((artwork: IArtwork) => (
        <ArtworkCard key={artwork.id.toString()} artwork={artwork} />
      ))}
    </View>
  );
}

export default ArtworkList;
