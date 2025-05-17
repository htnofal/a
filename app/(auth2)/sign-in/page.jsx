'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import colors from '@/app/lab/colors'

export default function SignInPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('http://localhost:5133/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok && data.token) {
        // ✅ Save token (you can use cookie, localStorage, or context)
        localStorage.setItem('token', data.token)

        setMessage('Login successful!')
        router.push('/dashboard') // change to your secured route
      } else {
        setMessage(data.message || 'Login failed.')
      }
    } catch (error) {
      console.error(error)
      setMessage('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-sm w-full space-y-2">
        <div className="text-center flex flex-col items-center justify-center space-y-2 mt-5">
          <Image src="/logo.svg" width={140} height={140} alt="logo" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Sign In</h2>
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-500 rounded-md placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-700"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-500 rounded-md placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white py-3 rounded-md transition font-semibold text-center cursor-pointer"
            style={{ backgroundColor: colors.secondary }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {message && (
            <p className="text-center text-sm text-red-600">{message}</p>
          )}

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <a href="/sign-up" className="font-medium text-indigo-700 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
