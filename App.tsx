import React, { useEffect, useState } from 'react';
import {
  Text, StatusBar, View, StyleSheet,
  Platform, TouchableOpacity, Image
} from 'react-native';
import { NativeModules } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
// const { VoiceChangingModule } = NativeModules;

const { VoiceChangingModule } = NativeModules;
const App = () => {
  const audioTrackURL = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3';

  const changeToAlein = () => {
    Platform.OS === 'android' && VoiceChangingModule.changeVoiceToAlien(audioTrackURL)
  };

  const changeToChild = () => {
    Platform.OS === 'android' && VoiceChangingModule.changeVoiceToChild(audioTrackURL);
  };

  const changeToFast = () => {
    Platform.OS === 'android' && VoiceChangingModule.speedUpVoice(audioTrackURL);
  };

  const changeToSlow = () => {
    Platform.OS === 'android' && VoiceChangingModule.slowDownVoice(audioTrackURL);
  };
  const { hasPermission, requestPermission } = useCameraPermission()
  React.useEffect(() => {
    requestPermission()
  }, [requestPermission])
  const device = useCameraDevice('back')
  if (device == null) return <View style={{ flex: 1, backgroundColor: 'red' }} />
  if (hasPermission) {
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
  }

};


export default App;