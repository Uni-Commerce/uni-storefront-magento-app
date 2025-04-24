import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useAwaitQuery } from '@/hooks/AwaitQuery'
import { GET_STORE_CONFIG } from '@/graphql/queries/getStoreConfig'
import { actions as appAction } from '@/store/app'
import type { StoreConfig, Currency } from '@/interfaces/store'

export const useAppLayout = () => {
  const dispatch = useDispatch()
  const getStoreConfig = useAwaitQuery<{
    currency: Currency
    storeConfig: StoreConfig
  }>(GET_STORE_CONFIG)

  useEffect(() => {
    const fetchConfig = async () => {
      const { data } = await getStoreConfig()
      console.info(data)
      if (data) {
        dispatch(
          appAction.setAppConfig({
            ...data,
            i18n: {}
          })
        )
      }
    }

    fetchConfig()
  }, [])
}
