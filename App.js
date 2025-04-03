import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import UserAccountScreen from './screens/UserAccountScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupLogin"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen  
          name="UserProfile" 
          component={UserProfileScreen} 
          options={{ headerShown: false  }} 
        />
        <Stack.Screen  
          name="AccountProfile" 
          component={UserAccountScreen} 
          options={{ headerShown: false  }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
          
      </Stack.Navigator>
    </NavigationContainer>
  )
}
