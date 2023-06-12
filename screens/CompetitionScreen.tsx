/*import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { getCompetitions, joinCompetition } from '../services/competitionService';
import { IArtwork } from '../interfaces/IArtwork';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import styles from '../styles';


// Define the props type for your screen component
interface CompetitionScreenProps {
  route: RouteProp<Record<string, object | undefined>, 'Competition'>;
  // Add any other navigation prop types you need
}

const CompetitionScreen: FC<CompetitionScreenProps> = ({ route }) => {
  // Extract the necessary params from your route and pass them to IArtwork
  const artworkProps: IArtwork = {
    id: route.params.id,
    title: route.params.title,
    // other properties...
  };

  return <IArtwork {...artworkProps} />;

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

  // Define the props type for your screen component

  

  return (


        <View >
          <h1>Hello Competition</h1>
          
        </View>
      )
};

export default CompetitionScreen;
*/