export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://denova.somee.com"
).replace(/\/$/, "")

export const hasApiBaseUrl = Boolean(API_BASE_URL)
