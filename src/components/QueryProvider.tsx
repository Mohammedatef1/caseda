"use client"

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

interface QueryProviderProps {
  children: React.ReactNode
}

const QueryProvider = ({children} : QueryProviderProps) => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider