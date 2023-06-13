import axios from 'axios';
import { IArtwork } from '../interfaces/IArtwork';


const apiBase = 'http://localhost:3001/api'

export const getArtworks = async () => {
  try {
    const response = await axios.get(`${apiBase}/artworks`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getArtworkById = async (artworkId: string) => {
  try {
    const response = await axios.get(`${apiBase}/artworks/${artworkId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createArtwork = async (title: string, imageURL: string, artist: string) => {
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
    const response = await axios.post(`${apiBase}/artworks/`, artwork);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLikesCount = async (artworkId: string) => {
  try {
    const response = await axios.get(`${apiBase}/artworks/${artworkId}/likesCount`);
    return response.data.likesCount;
  } catch (error) {
    console.error(error);
  }
};

export const getArtworksByUser = async (username: string) => {
  try {
    console.log(username);

    if (!username) {
      throw new Error("Username is required to fetch artworks");
    }
    const response = await axios.get(`${apiBase}/users/${username}/artworks`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch artworks: ${error}`);
  }
};

export const getSortedArtworks = async () => {
  try {
      const response = await axios.get(`${apiBase}/artworks/sortedByLikes`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
}


export const likeArtwork = async (artworkId: string) => {
  try {
    const response = await axios.patch(`${apiBase}/artworks/${artworkId}/like`);
    console.log(response.data); // Handle the response if needed
  } catch (error) {
    console.error("Error:", error);
  }
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