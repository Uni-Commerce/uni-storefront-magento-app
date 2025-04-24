import loadable from '@loadable/component'
import { ActivityIndicator, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => {
              // const Component = focused ? ProductsActiveIcon : ProductsIcon
              return <MaterialIcons name="home-outline" size={28} />
            }
          }}
        />
        <Tab.Screen
          name="category"
          component={CategorySreen}
          options={{
            title: 'Category',
            tabBarLabel: 'Category',
            tabBarIcon: () => {
              return <Ionicons name="grid-outline" size={24} />
            }
          }}
        />
        <Tab.Screen
          name="cart"
          component={CartSreen}
          options={{
            title: 'Cart',
            tabBarLabel: 'Cart',
            tabBarIcon: () => {
              return <Ionicons name="cart-outline" size={28} />
            }
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountScreen}
          options={{
            title: 'Account',
            tabBarLabel: 'Account',
            tabBarIcon: () => {
              return <MaterialIcons name="account-outline" size={30} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppLayout
