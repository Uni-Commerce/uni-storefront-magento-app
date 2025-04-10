import { createAsyncThunk } from '@reduxjs/toolkit'

export const applyCouponCode = createAsyncThunk(
  'cart/applyCouponCode',
  async (payload: any, { getState }) => {
    const { promo, applyCouponMutaion } = payload
    const { cart }: any = getState()
    const { cartId } = cart

    try {
      const { data } = await applyCouponMutaion({
        variables: { cartId, promo }
      })
      const cartDetail: any = data?.applyCoupon?.cart ?? null
      return Promise.resolve(cartDetail)
    } catch (error: any) {
      return Promise.reject(error)
    }
  }
)

export const cancelCouponCode = createAsyncThunk(
  'cart/cancelCouponCode',
  async (payload: any, { getState }) => {
    const { cancelCouponMutaion } = payload
    const { cart }: any = getState()
    const { cartId } = cart

    try {
      const { data } = await cancelCouponMutaion({
        variables: { cartId }
      })
      const cartDetail: any = data?.cancelCoupon?.cart ?? null
      return Promise.resolve(cartDetail)
    } catch (error: any) {
      return Promise.reject(error)
    }
  }
)
