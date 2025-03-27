import React from 'react'
import { SafeAreaView, Button, Text, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppLayout from '@/components/AppLayout'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button color="#841584" title="123" />
      <Text>123</Text>
      <AppLayout />
    </SafeAreaView>
  )
}

export default App
