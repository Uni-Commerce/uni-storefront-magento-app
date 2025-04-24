import loadable from '@loadable/component'
import { ActivityIndicator } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native-paper'

import type { RootStackParamList } from '@/interfaces/navigation'
import HomeScreen from '@/routes/home'

const ProductScreen = loadable(() => import('@/routes/product'), {
  fallback: <ActivityIndicator size="large" />
})
const LoginScreen = loadable(() => import('@/routes/login'), {
  fallback: <ActivityIndicator size="large" />
})
const AccountScreen = loadable(() => import('@/routes/account'), {
  fallback: <ActivityIndicator size="large" />
})

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppScreen = () => {
  return (
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
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login'
        }}
      />
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{
          title: 'Account'
        }}
      />
    </Stack.Navigator>
  )
}

export default AppScreen
