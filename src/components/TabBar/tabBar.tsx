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
        headerShown: true,
        tabBarHideOnKeyboard: Platform.OS === 'android'
      })}>
      <Tab.Screen
        name="checkout"
        component={CheckoutSreen}
        options={{
          headerTitle: 'Checkout'
        }}
      />
      <Tab.Screen
        name="account"
        component={AccountScreen}
        options={{
          headerTitle: 'Account'
        }}
      />
    </Tab.Navigator>
  )
}

export default TabBar
