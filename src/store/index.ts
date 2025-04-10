import { reducer as appReducer } from './app'
import { reducer as cartReducer } from './cart'

export const rootReducer = {
  app: appReducer,
  cart: cartReducer
}
