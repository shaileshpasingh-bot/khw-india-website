import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { Users, MapPin, Calendar, Clock } from 'lucide-react'

const GetInvolved = () => {
  const { addVolunteerApplication } = useData()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredRole: 'Tutor',
    availability: 'Weekends',
    message: '',
    resume: null,
  })

  const volunteerRoles = [
    {
      id: 1,
      title: 'Tutor',
      description: 'Help children with their studies. Provide academic support and mentoring.',
      timeCommitment: '4 hours/week',
      skills: 'Teaching, Patience, Subject Knowledge',
    },
    {
      id: 2,
      title: 'Healthcare Volunteer',
      description: 'Assist in medical camps and health awareness programs.',
      timeCommitment: '6 hours/week',
      skills: 'Basic first aid, compassion',
    },
    {
      id: 3,
      title: 'Skills Trainer',
      description: 'Teach vocational skills like tailoring, digital literacy, or handicrafts.',
      timeCommitment: '5 hours/week',
      skills: 'Professional expertise, communication',
    },
    {
      id: 4,
      title: 'Community Mobilizer',
      description: 'Engage with communities and spread awareness about our programs.',
      timeCommitment: '8 hours/week',
      skills: 'Communication, problem-solving',
    },
    {
      id: 5,
      title: 'Event Coordinator',
      description: 'Help organize fundraising events, medical camps, and workshops.',
      timeCommitment: '4-6 hours/week',
      skills: 'Organization, event management',
    },
    {
      id: 6,
      title: 'Social Media Manager',
      description: 'Create and manage content for our social media channels.',
      timeCommitment: '5 hours/week',
      skills: 'Digital marketing, content creation',
    },
  ]

  const upcomingOpportunities = [
    {
      id: 1,
      title: 'Summer Camp Coordinator',
      date: '2024-06-01',
      location: 'Mumbai',
      description: 'Help coordinate our summer educational camps for children.',
    },
    {
      id: 2,
      title: 'Medical Camp Helper',
      date: '2024-09-20',
      location: 'Various rural locations',
      description: 'Assist in organizing a medical camp in rural areas.',
    },
    {
      id: 3,
      title: 'Fundraising Event Volunteer',
      date: '2024-10-15',
      location: 'Grand Ballroom, Mumbai',
      description: 'Help with our annual charity gala.',
    },
  ]

  const handleFormChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, [name]: files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addVolunteerApplication(formData)
    alert('Thank you for your application! We will contact you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredRole: 'Tutor',
      availability: 'Weekends',
      message: '',
      resume: null,
    })
    setShowForm(false)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-primary-50">Join us in making a difference in children's lives</p>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {volunteerRoles.map(role => (
              <div key={role.id} className="card card-hover p-6">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{role.description}</p>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span>{role.timeCommitment}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary-600 mt-0.5" />
                    <span>{role.skills}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, preferredRole: role.title }))
                    setShowForm(true)
                  }}
                  className="btn-primary text-sm py-2 px-4 w-full"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingOpportunities.map(opp => (
              <div key={opp.id} className="card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-primary-600">{opp.date}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{opp.location}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{opp.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{opp.description}</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-outline text-sm py-2 px-4"
                >
                  Sign Up
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="py-16">
          <div className="container-custom max-w-2xl">
            <h2 className="text-2xl font-bold mb-8">Volunteer Application</h2>
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
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
                    required
                    className="input-field"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Role *</label>
                  <select
                    name="preferredRole"
                    value={formData.preferredRole}
                    onChange={handleFormChange}
                    className="input-field"
                  >
                    {volunteerRoles.map(role => (
                      <option key={role.id} value={role.title}>{role.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleFormChange}
                    className="input-field"
                  >
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Flexible</option>
                    <option>Evenings</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tell us about yourself *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  className="input-field"
                  placeholder="Why do you want to volunteer? What are your skills and interests?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Upload Resume (Optional)</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFormChange}
                  accept=".pdf,.doc,.docx"
                  className="input-field cursor-pointer"
                />
              </div>
              <div className="flex gap-4">
                <button type="submit" className="btn-primary py-2 px-6">Submit Application</button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary py-2 px-6"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Why Volunteer */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-bold mb-2">Make a Real Impact</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Your efforts directly change the lives of underprivileged children and communities.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2">Learn & Grow</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Develop new skills, gain experience, and expand your professional network.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2">Join a Community</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Connect with like-minded individuals passionate about social change.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2">Flexible Commitment</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Choose your role, time commitment, and availability. We work around your schedule.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved