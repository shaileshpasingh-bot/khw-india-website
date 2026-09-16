import React, { useState } from 'react'
import { useData } from '../../context/DataContext'
import { Download, Calendar } from 'lucide-react'
import Papa from 'papaparse'

const AdminOverview = () => {
  const { data } = useData()
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' })

  const exportToCSV = (filename, csvData) => {
    const csv = Papa.unparse(csvData)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.csv`
    a.click()
  }

  const handleExportVisitors = () => {
    exportToCSV('visitors', [
      { metric: 'Total Visitors', value: data.stats.totalVisitors },
      { metric: 'Visitors Over 3 Minutes', value: data.stats.visitorsOver3Min },
      { metric: 'Average Session Time (mins)', value: data.stats.avgSessionTime },
      { metric: 'Bounce Rate', value: `${data.stats.bounceRate}%` },
    ])
  }

  const handleExportDonations = () => {
    exportToCSV('donations', data.donations)
  }

  const handleExportVolunteers = () => {
    exportToCSV('volunteers', data.volunteerApplications)
  }

  const handleExportEventRegistrations = () => {
    exportToCSV('event_registrations', data.eventRegistrations)
  }

  const handleExportContacts = () => {
    exportToCSV('contact_submissions', data.contactSubmissions)
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Total Visitors</p>
          <p className="text-3xl font-bold text-primary-600">{data.stats.totalVisitors}</p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Overall traffic</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Engaged Visitors (>3 min)</p>
          <p className="text-3xl font-bold text-primary-600">{data.stats.visitorsOver3Min}</p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">High-intent visitors</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Avg Session Time</p>
          <p className="text-3xl font-bold text-primary-600">{data.stats.avgSessionTime}m</p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Minutes per session</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Bounce Rate</p>
          <p className="text-3xl font-bold text-primary-600">{data.stats.bounceRate}%</p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Single-page sessions</p>
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Date Range Filter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Start Date</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">End Date</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Traffic Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <h3 className="font-bold mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {Object.entries(data.stats.trafficSources).map(([source, value]) => (
              <div key={source} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 capitalize">{source}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-primary-600 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="font-bold w-12 text-right">{value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <h3 className="font-bold mb-4">Device Breakdown</h3>
          <div className="space-y-3">
            {Object.entries(data.stats.deviceBreakdown).map(([device, value]) => (
              <div key={device} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400 capitalize">{device}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div
                      className="h-2 bg-accent-600 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="font-bold w-12 text-right">{value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 className="font-bold mb-4">Top Pages</h3>
        <div className="space-y-3">
          {data.stats.topPages.map((page, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <span className="font-medium">{page.page}</span>
              <div className="flex items-center gap-3">
                <div className="w-40 h-2 bg-slate-200 dark:bg-slate-600 rounded-full">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${(page.views / 450) * 100}%` }}
                  />
                </div>
                <span className="font-bold w-16 text-right">{page.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Data */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Download className="w-5 h-5" />
          Export Data
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={handleExportVisitors}
            className="btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Visitor Stats
          </button>
          <button
            onClick={handleExportDonations}
            className="btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Donations ({data.donations.length})
          </button>
          <button
            onClick={handleExportVolunteers}
            className="btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Volunteers ({data.volunteerApplications.length})
          </button>
          <button
            onClick={handleExportEventRegistrations}
            className="btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Event Registrations ({data.eventRegistrations.length})
          </button>
          <button
            onClick={handleExportContacts}
            className="btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Contacts ({data.contactSubmissions.length})
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview