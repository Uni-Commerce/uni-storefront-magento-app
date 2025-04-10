import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native-paper'

import { useDispatch } from 'react-redux'

import type { RootStackParamList } from '@/interfaces/navigation'
import { actions as appAction } from '@/store/app'
import HomeScreen from '@/routes/home'
import ProductScreen from '@/routes/product'
import TabBar from '@/components/TabBar'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppLayout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      appAction.setAppConfig({
        currency: 'USD',
        i18n: {},
        storeConfig: {}
      })
    )
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={() => ({
          animation: 'slide_from_right',
          animationDuration: 100,
          gestureDirection: 'horizontal',
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTintColor: '#151515',
          headerRight: () => <Button>Info</Button>
        })}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="product"
          component={ProductScreen}
          options={{
            title: 'Product Page'
          }}
        />
      </Stack.Navigator>
      {/* <TabBar /> */}
    </NavigationContainer>
  )
}

export default AppLayout
