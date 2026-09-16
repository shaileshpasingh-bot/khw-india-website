import React, { useState } from 'react'
import { useData } from '../../context/DataContext'
import { Mail, FileText } from 'lucide-react'

const AdminContent = () => {
  const { data } = useData()
  const [activeTab, setActiveTab] = useState('donations')

  const tabs = [
    { id: 'donations', label: 'Donations', icon: Mail, count: data.donations.length },
    { id: 'contacts', label: 'Contact Submissions', icon: FileText, count: data.contactSubmissions.length },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content & Submissions</h2>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
        {tabs.map(tab => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label} ({tab.count})
            </button>
          )
        })}
      </div>

      {/* Donations Tab */}
      {activeTab === 'donations' && (
        <div className="space-y-4">
          {data.donations.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">No donations yet</p>
            </div>
          ) : (
            data.donations.map((donation, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Donor Name</p>
                    <p className="font-semibold">{donation.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Amount</p>
                    <p className="font-bold text-primary-600 text-lg">₹{donation.amount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Type</p>
                    <p className="font-semibold capitalize">{donation.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email</p>
                    <p className="font-semibold text-sm">{donation.email}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Contact Submissions Tab */}
      {activeTab === 'contacts' && (
        <div className="space-y-4">
          {data.contactSubmissions.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">No contact submissions yet</p>
            </div>
          ) : (
            data.contactSubmissions.map((submission, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Name</p>
                    <p className="font-semibold">{submission.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email</p>
                    <p className="font-semibold">{submission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Subject</p>
                    <p className="font-semibold">{submission.subject}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Message</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 p-3 rounded">
                    {submission.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default AdminContent