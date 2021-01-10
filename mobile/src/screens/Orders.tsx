import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Alert, Text } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Order } from '../@types/interfaces'
import Header from '../components/Header'
import OrderCard from '../components/OrderCard'
import { fetchOrders } from '../services/api'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const nav = useNavigation()
  const isFocused = useIsFocused()

  const fetchOrdersData = () => {
    setIsLoading(true)
    fetchOrders()
      .then(res => setOrders(res.data))
      .catch(error => Alert.alert('Houve um erro ao buscar os pedidos: '+error.message))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (isFocused)
      fetchOrdersData()
  }, [isFocused])

  const handleOnPress = (order: Order) => {
    console.log(order)
    nav.navigate('OrderDetails', {order})
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        { isLoading
          ? <Text>Carregando pedidos ...</Text>
          : (
            orders.map( order => (
              <TouchableOpacity
                key={order.id}
                activeOpacity={1.0}
                onPress={() => handleOnPress(order)}>
                <OrderCard order={order} />
              </TouchableOpacity>
            ))
          )
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  }
})
