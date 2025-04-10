import { Provider, ProviderProps } from 'react-redux'
import type { FC } from 'react'

import { rootReducer } from '@/store'
import { createStore } from './createStore'

interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  children: React.ReactNode
}

const StoreProvider: FC<StoreProviderProps> = ({ children, ...props }) => {
  const store = createStore(rootReducer)

  return (
    <Provider store={store} {...props}>
      {children}
    </Provider>
  )
}

export default StoreProvider
