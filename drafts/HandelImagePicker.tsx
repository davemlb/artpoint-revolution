import React from 'react';
import { Button } from 'react-native';
import { launchImageLibrary, ImagePickerResponse, MediaType } from 'react-native-image-picker';

interface ImagePickerProps {
  onImagePick: (uri: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ onImagePick }) => {
  const handleImagePicker = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 300,
      maxWidth: 300,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.errorMessage && response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        const uri = selectedAsset?.uri;

        if (uri) {
          onImagePick(uri);
        }
      }
    });
  };

  return (
    <Button title="Pick Image" onPress={handleImagePicker} />
  );
};

export default ImagePicker;
