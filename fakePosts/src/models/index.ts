export type PostModel = {
  id: number
  content: string
  created: string
}

export type FetchData<T> = {
  data: T | undefined
  isLoading: boolean
  hasError: Error | null
}