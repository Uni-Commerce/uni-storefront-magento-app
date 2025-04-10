import { useCallback } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'

import type { NavigationProp } from '@/interfaces/navigation'

const ProductScreen = () => {
  const route = useRoute()
  const navigation = useNavigation<NavigationProp>()
  const { params }: any = route

  const onBack = () => {
    navigation.navigate('home')
  }

  useFocusEffect(
    useCallback(() => {
      navigation?.setOptions({
        title: params?.sku ?? ''
      })
    }, [params])
  )

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
    </View>
  )
}

export default ProductScreen
