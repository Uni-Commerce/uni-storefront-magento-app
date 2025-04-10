import { useCallback } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import type { NavigationProp } from '@/interfaces/navigation'

const ProductScreen = () => {
  const route = useRoute()
  const navigation = useNavigation<NavigationProp>()
  const currency = useSelector((state: any) => state.app.currency)
  const { params }: any = route

  useFocusEffect(
    useCallback(() => {
      navigation?.setOptions({
        title: params?.sku ?? ''
      })
    }, [params])
  )

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Screen</Text>
      <Text style={{ fontSize: 30 }}>Currency - {currency}</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
    </SafeAreaView>
  )
}

export default ProductScreen
