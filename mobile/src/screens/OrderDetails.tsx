import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert, Text, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Order } from '../@types/interfaces'
import Header from '../components/Header'
import OrderCard from '../components/OrderCard'
import { RectButton } from 'react-native-gesture-handler'
import { confirmDelivery } from '../services/api'

interface RouteProps {
  route: {
    params: {
      order: Order
    }
  }
}

export default function OrderDetails({ route }: RouteProps) {
  const { order } = route.params 
    
  const nav = useNavigation()

  const handleOnStartGoogleMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`
    )
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} entregue!`)
        handleOnBack()
      })
      .catch(error => Alert.alert(`Houve um erro ao regitrar a entrega do pedido ${order.id}: ${error}`))
  }

  const handleOnBack = () => {
    nav.navigate('Orders')
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleOnStartGoogleMaps}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnBack}>
          <Text style={styles.buttonText}>VOLTAR</Text>
        </RectButton>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }
})
