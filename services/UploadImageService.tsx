/*const uploadImage = async () => {
    if (Image != null) {
        try {
            const formData = new FormData();
            formData.append('file', {
                uri: Image.path,
                type: Image.mime, // or 'image/jpeg' if the mime type isn't included
                name: Image.path.split('/').pop(),
            });

            const result = await axios({
                url: 'https://localhost:7160/UploadImage',
                method: 'POST',
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'},
            });

            formData.delete('file');
            return result.data;
        } catch (error) {
            console.error(error);
        }
    }
};
*/