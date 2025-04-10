import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from '@/routes/account'
import CheckoutSreen from '@/routes/checkout'

const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="account"
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS === 'android'
      })}>
      <Tab.Screen name="checkout" component={CheckoutSreen} />
      <Tab.Screen name="account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default TabBar
