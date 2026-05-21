export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  PAYMENT_MOCK:
    process.env.NEXT_PUBLIC_PAYMENT_MOCK !== "false",
  SETTINGS_MOCK:
    process.env.NEXT_PUBLIC_SETTINGS_MOCK !== "false",
  NOTIFICATIONS_MOCK:
    process.env.NEXT_PUBLIC_NOTIFICATIONS_MOCK !== "false",
}
