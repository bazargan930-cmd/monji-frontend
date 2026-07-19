// src/lib/api/client.ts

import { API_BASE_URL } from "./config"

type FetchOptions = RequestInit & {
  skipAuth?: boolean
}

export async function apiFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const { skipAuth, headers, ...rest } = options

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    credentials: skipAuth ? "omit" : "include",
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }

  return res.json() as Promise<T>
}
