import { SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as PaperProvider, MD2LightTheme, configureFonts } from 'react-native-paper'
import type { MD2Theme } from 'react-native-paper'

import StoreProvider from '@/provider/StoreProvider'
import AppLayout from '@/components/AppLayout'

const primaryColor: string = '#556cd6'
const theme: MD2Theme = {
  ...MD2LightTheme,
  colors: {
    ...MD2LightTheme.colors,
    primary: primaryColor,
    accent: primaryColor,
    background: '#fff',
    text: '#151515',
    placeholder: '#797979'
  },
  roundness: 8,
  fonts: configureFonts({ isV3: false }),
  version: 2
}

const App = () => {
  return (
    <GestureHandlerRootView>
      <StoreProvider>
        <PaperProvider theme={theme}>
          <SafeAreaView>
            <AppLayout />
          </SafeAreaView>
        </PaperProvider>
      </StoreProvider>
    </GestureHandlerRootView>
  )
}

export default App
