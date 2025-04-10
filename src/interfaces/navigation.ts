import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  home: any
  login: undefined
  cart: undefined
  checkout: undefined
}

export type NavigationProp = StackNavigationProp<RootStackParamList>
