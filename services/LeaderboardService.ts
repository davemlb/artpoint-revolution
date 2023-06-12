
const apiBase = 'http://localhost:3001/api/'

const getArtworkLeaderboard = async () => {
    const response = await fetch(`${apiBase}`);

    if (!response.ok) {
        throw new Error('Failed to fetch artwork leaderboard');
    }

    const leaderboard = await response.json();
    return leaderboard;
};
