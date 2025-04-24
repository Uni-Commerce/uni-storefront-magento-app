import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  main: undefined
  scan: undefined
  home: undefined
  category: undefined
  cart: undefined
  account: undefined
  checkout: undefined
}

export type NavigationProp = StackNavigationProp<RootStackParamList>
