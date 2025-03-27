import React from 'react'
import { SafeAreaView, Button, View, Text, Alert, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import AppLayout from '@/components/AppLayout'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }
  console.info('backgroundStyle:', backgroundStyle)

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button color="#841584" title="123" onPress={() => Alert.alert('Simple Button pressed')} />
      <View style={{ margin: 20, padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>123</Text>
      </View>
      <AppLayout />
    </SafeAreaView>
  )
}

export default App
