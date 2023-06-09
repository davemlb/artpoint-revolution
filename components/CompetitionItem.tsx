/*import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';



const CompetitionItem = ({ competition, onEnter, onView }) => (
  <View style={{ padding: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{competition.name}</Text>
    <Text>{competition.description}</Text>
    <Text>{`${competition.competitorsCount} Competitors`}</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
      <Button title="Enter" onPress={() => onEnter(competition.id)} />
      <Button title="View" onPress={() => onView(competition.id)} />
    </View>
  </View>
);

const CompetitionsScreen = ({ competitions, onEnterCompetition, onViewCompetition }) => {
  const renderItem = ({ item }) => (
    <CompetitionItem
      competition={item}
      onEnter={onEnterCompetition}
      onView={onViewCompetition}
    />
  );

  return (
    <FlatList
      data={competitions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CompetitionsScreen;
*/