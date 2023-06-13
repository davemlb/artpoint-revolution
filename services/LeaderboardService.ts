import axios from 'axios';
import { IArtworkLeaderboard } from '../interfaces/IArtworkLeaderboard';

const apiBase = 'http://localhost:3001/api'

export const getArtworkLeaderboard = async () => {
    const response = await axios.get(`${apiBase}/artwork-leaderboard`);

    // if (!response.ok) {
    //     throw new Error('Failed to fetch artwork leaderboard');
    // }

    const leaderboard = await response.data();
    return leaderboard;
};

export const getSortedLeaderboard = async () => {
    try {
        const response = await axios.get(`${apiBase}/sortedByLikes`);
    
        const sortedLeaderboard =  response.data();
        return sortedLeaderboard;
      } catch (error) {
        console.error("Error:", error);
      }
}

