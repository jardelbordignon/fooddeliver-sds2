import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import Logo from '../assets/deliveryman.png'

export default function Home() {

  const handleOnPress = () => {
    Alert.alert('Ver Pedidos')
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.title}>
          Acompanhe os pedidos!
        </Text>
        <Text style={styles.subTitle}>
          Receba os pedidos na palma da sua mão {'\n'}
          e entergue tudo no prazo com qualidade
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button}
          onPress={handleOnPress}>
          <Text style={styles.buttonText}>VER PEDIDOS</Text>       
        </RectButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    alignItems: 'center'
  },
  title: {
    color: '#263238',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    marginTop: 31,
    textAlign: 'center'
  },
  subTitle: {
    color: '#9E9E9E',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
    textAlign: 'center'
  },
  footer: {
    marginTop: '5%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24
  }
})