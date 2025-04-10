import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import type { NavigationProp } from '@/interfaces/navigation'

const CheckoutSreen = () => {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checkout Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  )
}

export default CheckoutSreen
