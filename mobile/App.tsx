import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import AppLoading from 'expo-app-loading'

import AppRoutes from './src/screens/AppRoutes'

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular, OpenSans_700Bold
  });
  
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <AppRoutes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
