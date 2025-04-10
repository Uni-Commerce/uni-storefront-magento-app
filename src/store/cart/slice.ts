import { createSlice, Slice } from '@reduxjs/toolkit'

import { applyCouponCode, cancelCouponCode } from './actions'

const initialState: any = {
  cartId: null,
  cartQty: 0,
  cartDetail: null,
  loading: false
}

export const slice: Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setId: (state: any, { payload }) => {
      state.cartId = payload
    },
    setCart: (state: any, { payload }) => {
      state.cartId = payload.id
      state.cartQty = payload.quantity
      state.loading = false
    },
    setCartDetail: (state: any, { payload }) => {
      if (payload?.quantity) state.cartQty = payload.quantity
      state.cartDetail = { ...state.cartDetail, ...payload }
    },
    setLoading: (state: any, { payload }) => {
      state.loading = payload
    },
    setInitialState: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyCouponCode.fulfilled, (state, { payload }) => {
        if (payload) {
          state.cartId = payload.id
          state.cartDetail = { ...state.cartDetail, ...payload }
        }
      })
      .addCase(cancelCouponCode.fulfilled, (state, { payload }) => {
        if (payload) {
          state.cartId = payload.id
          state.cartDetail = { ...state.cartDetail, ...payload }
        }
      })
  }
})
