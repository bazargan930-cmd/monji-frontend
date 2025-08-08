'use client'

import useSWR from 'swr'

interface UserInfo {
  fullName: string
  nationalId: string
  today: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function useUserInfo() {
  const { data, error, isLoading } = useSWR<UserInfo>('/api/utils/user-info', fetcher)

  return {
    userInfo: data,
    isLoading,
    isError: error,
  }
}
