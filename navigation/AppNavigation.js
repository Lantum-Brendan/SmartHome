import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack= createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component = { Home }/>
        <Stack.Screen name="Welcome" options={{headerShown: false }} component = {Welcome } />
        <Stack.Screen name="Login" options= {{headerShown: false }} component={ Login } />
        <Stack.Screen name="Signup" options= {{headerShown: false }} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}