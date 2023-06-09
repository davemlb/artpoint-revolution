import axios from 'axios';
import { IArtwork } from '../interfaces/IArtwork';

export const getArtworks = async () => {
  try {
    const response = await axios.get('/api/artworks');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const uploadArtwork = async (artwork: IArtwork) => {
  try {
    const response = await axios.post('/api/artworks', artwork);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLikesCount = async (artworkId: string) => {
  try {
    const response = await axios.get(`/api/artworks/${artworkId}/likesCount`);
    return response.data.likesCount;
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