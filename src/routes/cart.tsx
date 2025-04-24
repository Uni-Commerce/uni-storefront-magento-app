import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import type { NavigationProp } from '@/interfaces/navigation'

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const currency = useSelector((state: any) => state.app.currency)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen</Text>
      <View>
        <Text>Currency - {currency.code}</Text>
      </View>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  )
}

export default CartScreen
