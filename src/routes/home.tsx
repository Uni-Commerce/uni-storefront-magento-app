import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { REACT_NATIVE_API_URL } from '@env'

import type { NavigationProp } from '@/interfaces/navigation'

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  console.info('REACT_NATIVE_API_URL:', REACT_NATIVE_API_URL)
  const handleRedirect = () => {
    navigation.navigate('product', {
      sku: 'HT-2150B'
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {REACT_NATIVE_API_URL}</Text>
      <Button icon="camera" mode="contained" onPress={handleRedirect}>
        <Text>Go to Product</Text>
      </Button>
      <Button onPress={() => navigation.navigate('account')}>
        <Text>Account Information</Text>
      </Button>
    </View>
  )
}

export default HomeScreen
