import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteType } from '../pages/Home'

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
    })
  })
})

export default api

export const { useGetPratosQuery, useGetRestaurantesQuery } = api
