/*import React, { useEffect, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { getCompetitions, joinCompetition } from '../services/competitionService';
import { IArtwork } from '../interfaces/IArtwork';


export const CompetitionScreen: React.FC<IArtwork> = ({ }) => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const competitions = await getCompetitions();
      setCompetitions(competitions);
    };

    fetchCompetitions();
  }, []);

  const handleJoinCompetition = async (competitionId: string) => {
    // replace "userId" with the actual ID of the current user
    const result = await joinCompetition(competitionId, "userId");
    console.log(result);
  };

  return (
    <ScrollView>
      {competitions.map((competition) => (
        <View key={competition.id}>
          <Text>{competition.title}</Text>
          <Text>{competition.description}</Text>
          <Button title="Join Competition" onPress={() => handleJoinCompetition(competition.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Competition;
*/