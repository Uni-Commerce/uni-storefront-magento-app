import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/client'

import { GET_STORE_CONFIG } from '@/graphql/queries/getStoreConfig'
import { actions as appAction } from '@/store/app'

export const useAppLayout = () => {
  const dispatch = useDispatch()
  const [getData, { data }] = useLazyQuery(GET_STORE_CONFIG)

  console.info('Data:', data)
  useEffect(() => {
    getData()

    dispatch(
      appAction.setAppConfig({
        currency: 'USD',
        i18n: {},
        storeConfig: {}
      })
    )
  }, [])
}
