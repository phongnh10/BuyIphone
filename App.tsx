import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/AppNavigations/StackNavigation'
import { UserProvider } from './src/AppContext/UserContex'
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </UserProvider>
  )
}

export default App
