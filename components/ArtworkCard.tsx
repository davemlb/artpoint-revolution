import React from 'react';
import { IArtwork } from '../interfaces/IArtwork';

interface ArtworkCardProps {
  artwork: IArtwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div>
      <h2>{artwork.title}</h2>
      <img src={artwork.imageURL} alt={artwork.title} />
      <p>Likes: {artwork.likesCount}</p>
      <p>Artist: {artwork.artist}</p>
    </div>
  );
};

export default ArtworkCard;
