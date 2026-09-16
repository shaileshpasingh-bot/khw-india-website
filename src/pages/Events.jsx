import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { Calendar, MapPin, Users } from 'lucide-react'

const Events = () => {
  const { data, addEventRegistration } = useData()
  const [registrationForm, setRegistrationForm] = useState({})
  const [showRegistration, setShowRegistration] = useState(null)
  const [formData, setFormData] = useState({
    eventId: null,
    name: '',
    email: '',
    phone: '',
    guests: '1',
  })

  const pastEvents = [
    {
      id: 101,
      title: 'Summer Educational Camp 2024',
      date: '2024-07-15',
      location: 'Mumbai',
      description: 'Successful summer camp with 200+ children',
      attendees: 250,
    },
    {
      id: 102,
      title: 'Health Awareness Workshop',
      date: '2024-06-01',
      location: 'Delhi',
      description: 'Health education for 1000+ women',
      attendees: 1000,
    },
  ]

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRegistration = (eventId) => {
    if (formData.name && formData.email && formData.phone) {
      addEventRegistration({ ...formData, eventId })
      alert('Thank you for registering! We will send you a confirmation email shortly.')
      setFormData({ eventId: null, name: '', email: '', phone: '', guests: '1' })
      setShowRegistration(null)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl text-primary-50">Join us for meaningful programs and fundraising events</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-8">
            {data.events.map(event => (
              <div key={event.id} className="card card-hover">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-auto object-cover rounded-lg md:rounded-none md:rounded-l-lg"
                    loading="lazy"
                  />
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <Calendar className="w-5 h-5 text-primary-600" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <MapPin className="w-5 h-5 text-primary-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <Users className="w-5 h-5 text-primary-600" />
                          <span>{event.registrations?.length || 0} people registered</span>
                        </div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-6">{event.description}</p>
                    </div>
                    <button
                      onClick={() => setShowRegistration(event.id)}
                      className="btn-primary text-sm py-2 px-4 w-fit"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistration && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container-custom max-w-md">
            <h2 className="text-2xl font-bold mb-8">Event Registration</h2>
            <div className="card p-8 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleFormChange}
                  className="input-field"
                >
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => handleRegistration(showRegistration)}
                  className="btn-primary py-2 px-6 flex-1"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowRegistration(null)}
                  className="btn-secondary py-2 px-6 flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map(event => (
              <div key={event.id} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-600">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events