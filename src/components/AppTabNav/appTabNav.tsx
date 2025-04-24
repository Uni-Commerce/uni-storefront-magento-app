import loadable from '@loadable/component'
import { ActivityIndicator, Platform, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerActions } from '@react-navigation/native'

import type { RootStackParamList } from '@/interfaces/navigation'
import HomeScreen from '@/routes/home'
import { styles } from './styles'

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

const AppTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ navigation }) => ({
        tabBarHideOnKeyboard: Platform.OS === 'android',
        tabBarActiveTintColor: '#151515',
        tabBarInactiveTintColor: '#8E8E8F',
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MaterialIcons name="line-scan" size={24} style={styles.scan} />
          </TouchableOpacity>
        )
      })}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return <MaterialIcons name={focused ? 'home' : 'home-outline'} size={28} />
          }
        }}
      />
      <Tab.Screen
        name="category"
        component={CategorySreen}
        options={{
          title: 'Category',
          tabBarLabel: 'Category',
          tabBarIcon: ({ focused }) => {
            return <Ionicons name={focused ? 'grid' : 'grid-outline'} size={24} />
          }
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartSreen}
        options={{
          title: 'Cart',
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused }) => {
            return <Ionicons name={focused ? 'cart' : 'cart-outline'} size={28} />
          }
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => {
            return <MaterialIcons name={focused ? 'account' : 'account-outline'} size={30} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default AppTabNav
