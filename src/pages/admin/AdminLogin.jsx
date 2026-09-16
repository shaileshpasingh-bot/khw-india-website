import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple demo login - in production, use real authentication
    if (credentials.email === 'admin@nonprofit.org' && credentials.password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid email or password. Use admin@nonprofit.org / admin123')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
            KH
          </div>
          <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Sign in to access the dashboard</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900 dark:bg-opacity-30 border border-red-200 dark:border-red-700 rounded-lg">
            <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="admin@nonprofit.org"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
            <LogIn className="w-5 h-5" />
            Sign In
          </button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Demo Credentials:</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Email: <code className="bg-white dark:bg-slate-700 px-2 py-1 rounded">admin@nonprofit.org</code></p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Password: <code className="bg-white dark:bg-slate-700 px-2 py-1 rounded">admin123</code></p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin