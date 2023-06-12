import axios from 'axios';
import { IArtwork } from '../interfaces/IArtwork';


const apiBase = 'https://localhost3001/api/'

export const getArtworks = async () => {
  try {
    const response = await axios.get(`${apiBase}artworks`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


const createArtwork = async (title: string, imageURL: string, artist: string) => {
    const response = await fetch(`${apiBase}/artworks/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, imageURL, artist }),
    });

    if (!response.ok) {
        throw new Error('Failed to create artwork');
    }

    const artwork = await response.json();
    return artwork;
};



export const uploadArtwork = async (artwork: IArtwork) => {
  try {
    const response = await axios.post(`${apiBase}/artwork/`, artwork);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLikesCount = async (artworkId: string) => {
  try {
    const response = await axios.get(`${apiBase}/artwork/${artworkId}/likesCount`);
    return response.data.likesCount;
  } catch (error) {
    console.error(error);
  }
};

const getArtworksByUser = async (username: string) => {
    const response = await fetch(`https://api.example.com/users/${username}/artworks`);

    if (!response.ok) {
        throw new Error('Failed to fetch artworks');
    }

    const artworks = await response.json();
    return artworks;
};








export function likeArtwork(id: string) {
    throw new Error('Function not implemented.');
}

export function bookmarkArtwork(id: string) {
    throw new Error('Function not implemented.');
}

export function tipArtwork(id: string) {
    throw new Error('Function not implemented.');
}
/*import axios from 'axios';
import { IArtwork } from '../interfaces/IArtwork';

export const getArtworkLeaderboard = async () => {
  try {
    const response = await axios.get('/api/artwork/leaderboard'); // replace with your endpoint
    return response.data as IArtwork[];
  } catch (error) {
    console.error(error);
  }
};

export const sortArtworkLeaderboardByLikes = async () => {
  try {
    const response = await axios.get('/api/artwork/leaderboard/sortedByLikes'); // replace with your endpoint
    return response.data as IArtwork[];
  } catch (error) {
    console.error(error);
  }
};
export function likeArtwork(id: string) {
    throw new Error('Function not implemented.');
}

export function bookmarkArtwork(id: string) {
    throw new Error('Function not implemented.');
}

export function tipArtwork(id: string) {
    throw new Error('Function not implemented.');
}

export function getLikesCount(id: string) {
  throw new Error('Function not implemented.');
}

*/