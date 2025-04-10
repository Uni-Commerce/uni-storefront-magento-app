import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import type { NavigationProp } from '@/interfaces/navigation'
import TabBar from '@/components/TabBar'

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const handleRedirect = () => {
    navigation.navigate('product', {
      sku: 'HT-2150B'
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button icon="camera" mode="contained" onPress={handleRedirect}>
        <Text>Go to Product</Text>
      </Button>
      <TabBar />
    </View>
  )
}

export default HomeScreen
