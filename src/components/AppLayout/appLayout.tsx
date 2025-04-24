import loadable from '@loadable/component'
import { ActivityIndicator, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import type { RootStackParamList } from '@/interfaces/navigation'
import { useAppLayout } from '@/hooks/AppLayout'
import HomeScreen from '@/routes/home'

const CategorySreen = loadable(() => import('@/routes/category'), {
  fallback: <ActivityIndicator size="large" />
})
const CartSreen = loadable(() => import('@/routes/cart'), {
  fallback: <ActivityIndicator size="large" />
})
const AccountScreen = loadable(() => import('@/routes/account'), {
  fallback: <ActivityIndicator size="large" />
})

const Tab = createBottomTabNavigator<RootStackParamList>()

const AppLayout = () => {
  useAppLayout()

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={() => ({
          headerShown: true,
          tabBarHideOnKeyboard: Platform.OS === 'android'
        })}>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home'
          }}
        />
        <Tab.Screen
          name="category"
          component={CategorySreen}
          options={{
            title: 'Category'
          }}
        />
        <Tab.Screen
          name="cart"
          component={CartSreen}
          options={{
            title: 'Cart'
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountScreen}
          options={{
            title: 'Account'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppLayout
