import React, { useState, useEffect } from "react";
import axios from "axios";
import { launchImageLibrary, MediaType } from "react-native-image-picker";
import { View, Text, TextInput, Button, ScrollView, Image } from "react-native";
import { IArtwork } from "../interfaces/IArtwork";
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import HandleImagePicker from "./HandelImagePicker";




function Handler() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [image, setImage] = useState<ImageOrVideo | null>(null);
  function setImageTxt(path: any) {
    throw new Error("Function not implemented.");
  }

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        username,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${username}`
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  interface ImageSourceProp {
    uri: string | undefined;
  }
  
  const YourComponent = () => {
    const [avatarSource, setAvatarSource] = useState<ImageSourceProp | null>(null);

  
    const setImageHandler = async () => {
      try {
          const image = await ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
          });
  
          if (image) {
              setImage(image);
              setImageTxt(image.path);
          }
      } catch (error) {
          console.error(error);
      }
  };
  

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/artworks/${username}`
        );
        setArtworks(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchArtworks();
  }, [username]);

  return (
    <ScrollView>
      <Text>Register</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />

      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />

      <Text>Pick an Image</Text>
      <Button title="Pick Image" onPress={HandleImagePicker} />

      {image && image.uri ? <Image source={{ uri: imageURL.uri }} style={{ width: 200, height: 200 }} /> : <DefaultImage />}



        <Text>Artworks</Text>
        {artworks.map((artwork, index) => (
          <View key={index}>
            <Text>{artwork.title}</Text>
            {artwork.image && <Image source={{ uri: artwork.image }} style={{ width: 200, height: 200 }} />}
          </View>
        ))}

    </ScrollView>
  );
}
}
export default Handler;
