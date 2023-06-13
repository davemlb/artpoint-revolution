import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ArtworkCard from './ArtworkCard';
import IUser from '../interfaces/IUser';
import { getArtworksByUser } from '../services/ArtworkService';
import { IArtwork } from '../interfaces/IArtwork';
import { UserProvider } from '../contexts/UserContext';

const UserProfile = ({ user }: { user: IUser }) => {
    const [artworks, setArtworks] = useState<IArtwork[]>([]);
  
    useEffect(() => {
        const fetchArtworks = async () => {

            const fetchedArtworks = await getArtworksByUser(user.username);
            if (fetchedArtworks) {
              setArtworks(fetchedArtworks || []);
              console.log(fetchedArtworks);
            } else {
              // Handle the case where fetchedArtworks is undefined
              console.log('No artworks fetched');
            }            
        };
      
        fetchArtworks();
      }, [user]);
      

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.bio}>Bio about myself</Text>
      </View>
      <View style={styles.artworkList}>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id.toString()} artwork={artwork} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
  },
  artworkList: {
    flex: 1,
  },
});

export default UserProfile;
