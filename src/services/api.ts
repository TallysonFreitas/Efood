import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteType } from '../pages/Home'

type Product = {
  id: number
  price: number
}

export type PurchaseType = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseReponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteType[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<RestauranteType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseReponse, PurchaseType>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export default api

export const {
  useGetPratosQuery,
  useGetRestaurantesQuery,
  usePurchaseMutation
} = api
