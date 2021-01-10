import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Orders from './Orders'
import OrderDetails from './OrderDetails'

const {Screen, Navigator} = createStackNavigator()

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' }
        }}>

        <Screen name='Home' component={Home} />
        <Screen name='Orders' component={Orders} />
        <Screen name='OrderDetails' component={OrderDetails} />

      </Navigator>
    </NavigationContainer>
  )
}
