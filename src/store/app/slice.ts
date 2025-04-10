import { createSlice, Slice } from '@reduxjs/toolkit'

export const slice: Slice = createSlice({
  name: 'app',
  initialState: {
    currency: null,
    countryList: [],
    i18n: null,
    loading: false,
    storeConfig: null
  },
  reducers: {
    setAppConfig: (state: any, { payload }) => {
      const { currency, i18n, storeConfig } = payload
      state.currency = currency
      state.i18n = i18n
      state.storeConfig = storeConfig
    },
    setCountryList: (state: any, { payload }) => {
      state.countryList = payload
    },
    setLoading: (state, { payload }) => {
      state.loading = payload
    }
  }
})
