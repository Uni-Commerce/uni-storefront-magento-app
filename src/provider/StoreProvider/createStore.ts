import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

// const isProd: boolean = import.meta.env.PROD
// const isLogger: boolean = import.meta.env.REACT_APP_REDUX_LOGGER === 'true'

export const createStore = (reducer: any) => {
  const middleware: any = []
  const logger = createLogger({
    collapsed: false
  })

  middleware.push(logger)

  return configureStore({
    reducer: combineReducers(reducer),
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware] as any
  })
}
