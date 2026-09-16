import React from 'react'
import { useData } from '../../context/DataContext'
import { Users, MapPin, Calendar } from 'lucide-react'

const AdminEvents = () => {
  const { data } = useData()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Events</h2>

      <div className="space-y-6">
        {data.events.map(event => (
          <div key={event.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">{event.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary-600" />
                    <span className="text-sm">{event.registrations?.length || 0} Registrations</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{event.description}</p>
              </div>
            </div>

            {event.registrations && event.registrations.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-4">Registrations</h4>
                <div className="space-y-2">
                  {event.registrations.map((reg, idx) => (
                    <div key={idx} className="text-sm p-2 bg-slate-50 dark:bg-slate-700 rounded">
                      <p className="font-medium">{reg.name}</p>
                      <p className="text-slate-600 dark:text-slate-400">{reg.email} • {reg.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminEvents