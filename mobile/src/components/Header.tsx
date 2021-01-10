import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../assets/logo.png'

export default function Header() {
  const nav = useNavigation()
  
  const handlePress = () => nav.navigate('Home')

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: -0.24,
    marginLeft: 15
  }
});
