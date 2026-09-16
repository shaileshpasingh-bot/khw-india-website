import React, { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { LogOut, Menu, X, TrendingUp, Users, BookOpen, Calendar, FileText, BarChart3 } from 'lucide-react'
import { useData } from '../../context/DataContext'
import AdminOverview from './AdminOverview'
import AdminImpactStories from './AdminImpactStories'
import AdminPrograms from './AdminPrograms'
import AdminVolunteers from './AdminVolunteers'
import AdminEvents from './AdminEvents'
import AdminContent from './AdminContent'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentSection, setCurrentSection] = useState('overview')
  const { data } = useData()

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'impact-stories', label: 'Impact Stories', icon: BookOpen },
    { id: 'programs', label: 'Programs', icon: TrendingUp },
    { id: 'volunteers', label: 'Volunteers', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'content', label: 'Content', icon: FileText },
  ]

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    navigate('/admin/login')
  }

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">KH</span>
            </div>
            {sidebarOpen && <span className="font-bold">Admin Panel</span>}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentSection === item.id
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold">
              {menuItems.find(m => m.id === currentSection)?.label}
            </h1>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Welcome, Admin
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {currentSection === 'overview' && <AdminOverview />}
          {currentSection === 'impact-stories' && <AdminImpactStories />}
          {currentSection === 'programs' && <AdminPrograms />}
          {currentSection === 'volunteers' && <AdminVolunteers />}
          {currentSection === 'events' && <AdminEvents />}
          {currentSection === 'content' && <AdminContent />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard