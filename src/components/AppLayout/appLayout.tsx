import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { useAppLayout } from '@/hooks/AppLayout'
import AppTabNav from '@/components/AppTabNav'
import ScanScreen from '@/routes/scan'

const Drawer = createDrawerNavigator()

const AppLayout = () => {
  useAppLayout()

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right', // 从右侧滑出
          drawerType: 'slide' // 滑动效果
        }}
        initialRouteName="main">
        <Drawer.Screen
          name="main"
          component={AppTabNav}
          options={{
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="scan"
          component={ScanScreen}
          options={{
            headerShown: true,
            headerTitle: 'Scan'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppLayout
