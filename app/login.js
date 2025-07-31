import { useState } from 'react'
import supabase from '../lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (!error) setSent(true)
    else alert(error.message)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login with Magic Link</h1>
      {sent ? (
        <p>Check your email for the link!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2">
            Send Magic Link
          </button>
        </form>
      )}
    </div>
  )
}
