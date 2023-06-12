// In your service file
import axios from "axios";

const uploadImage = async (imageUri: string) => {
    try {
        const formData = new FormData();

        // Fetch the image data
        const response = await fetch(imageUri);
        const blob = await response.blob();

        // Get the file type
        const uriParts = imageUri.split('.');
        const fileType = uriParts[uriParts.length - 1];

        // Append the blob to the FormData
        formData.append('file', blob, `photo.${fileType}`);

        const result = await axios({
            url: 'http://localhost:3001/artworks/createArtwork',
            method: 'POST',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'},
        });

        formData.delete('file');
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export { uploadImage };
