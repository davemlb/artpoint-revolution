import axios from 'axios';

export const getCompetitions = async () => {
  try {
    const response = await axios.get('/api/competitions');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const joinCompetition = async (competitionId: string, userId: string) => {
  try {
    const response = await axios.post(`/api/competitions/${competitionId}/join`, { userId });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
