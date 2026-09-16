import React from 'react'
import { useData } from '../../context/DataContext'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'

const AdminVolunteers = () => {
  const { data, updateVolunteerStatus } = useData()

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 dark:bg-green-900 dark:bg-opacity-30 text-green-800 dark:text-green-200'
      case 'rejected':
        return 'bg-red-100 dark:bg-red-900 dark:bg-opacity-30 text-red-800 dark:text-red-200'
      default:
        return 'bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-30 text-yellow-800 dark:text-yellow-200'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4" />
      case 'rejected':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Volunteer Applications</h2>
        <p className="text-slate-600 dark:text-slate-400">Total: {data.volunteerApplications.length}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Pending</p>
          <p className="text-2xl font-bold">{data.volunteerApplications.filter(v => v.status === 'pending').length}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-600">{data.volunteerApplications.filter(v => v.status === 'approved').length}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Rejected</p>
          <p className="text-2xl font-bold text-red-600">{data.volunteerApplications.filter(v => v.status === 'rejected').length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {data.volunteerApplications.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">No volunteer applications yet</p>
          </div>
        ) : (
          data.volunteerApplications.map(app => (
            <div key={app.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Name</p>
                  <p className="font-semibold">{app.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Email</p>
                  <p className="font-semibold">{app.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Role</p>
                  <p className="font-semibold">{app.preferredRole}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Message</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{app.message}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(app.status)}`}>
                  {getStatusIcon(app.status)}
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
                {app.status === 'pending' && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateVolunteerStatus(app.id, 'approved')}
                      className="btn-primary text-sm py-1 px-3"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateVolunteerStatus(app.id, 'rejected')}
                      className="btn-secondary text-sm py-1 px-3"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminVolunteers