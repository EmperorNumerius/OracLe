import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      const base64Image = photo.base64;

      try {
        const response = await recognizeParts(base64Image);
        navigation.navigate('Results', { result: response.data });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Button title="Take Picture" onPress={takePicture} color="#841584" />
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  camera: { flex: 1, width: '100%' },
  buttonContainer: { flex: 0, flexDirection: 'row', justifyContent: 'center', margin: 20 },
});

const recognizeParts = async (base64Image) => {
  const url = 'https://api.brickognize.com/predict_parts';
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, { image: base64Image }, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
