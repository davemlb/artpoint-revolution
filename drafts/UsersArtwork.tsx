import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IArtwork } from '../interfaces/IArtwork';
import IUser from '../interfaces/IUser';

function UserArtworks({ username } : { username: string}) {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`/api/users/${username}/artworks`);
        setArtworks(response.data);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    fetchArtworks();
  }, [username]);

  return (
    <div>
      <h2>Artworks by {username}</h2>

      {error && <p>{error}</p>}

      <ul>
        {artworks.map((artwork: IArtwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserArtworks;
