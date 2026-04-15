"use client"

import { useState } from "react"
import { login } from "@/services/auth.service"
import { useAuth } from "@/hooks/useAuth"

export default function LoginForm() {
  const { setUser } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const res = await login({ email, password })

    setUser(res.data.user)
  }

  return (
    <div>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}