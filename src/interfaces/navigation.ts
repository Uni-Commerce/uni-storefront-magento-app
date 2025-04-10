import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  home: undefined
  login: undefined
  cart: undefined
  checkout: undefined
  product: {
    sku: string
  }
}

export type NavigationProp = StackNavigationProp<RootStackParamList>
