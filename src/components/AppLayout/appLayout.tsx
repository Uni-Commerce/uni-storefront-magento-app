import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useDispatch } from 'react-redux'

import type { RootStackParamList } from '@/interfaces/navigation'
import { actions as appAction } from '@/store/app'
import HomeScreen from '@/routes/home'
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
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
      <TabBar />
    </NavigationContainer>
  )
}

export default AppLayout
