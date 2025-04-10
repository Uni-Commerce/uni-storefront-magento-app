import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

export const createStore = (reducer: any) => {
  const middleware: any = []

  const logger = createLogger({
    collapsed: false,
    timestamp: true
  })

  middleware.push(logger)

  return configureStore({
    reducer: combineReducers(reducer),
    devTools: true,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware] as any
  })
}
