import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
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
        <Image source={{ uri: "https://theaquinian.net/wp-content/uploads/2016/10/meme1.jpg" } } style={styles.profileImage}/>
        <Text style={styles.name}>@{user.username}</Text>
        <Text style={styles.bio}>Art inspired by art</Text>
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
    padding: 10,
    backgroundColor: 'black',
  },
  profileInfo: {
    marginBottom: 20,
    alignItems: "center"
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white"

  },
  bio: {
    fontSize: 16,
    color: "white"

  },
  artworkList: {
    flex: 1,
  },
  profileImage: {
    width: '50%',
    aspectRatio: 1,
    borderRadius: 100,
    marginBottom: 10,
  },
});

export default UserProfile;
