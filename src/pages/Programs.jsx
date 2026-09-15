import React, { useState } from 'react'
import { useData } from '../context/DataContext'

const Programs = () => {
  const { data } = useData()
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-primary-50">Creating opportunities for underprivileged children across India</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {data.programs.map((program) => (
              <div key={program.id} className="card card-hover overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-64 md:h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-3">{program.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{program.description}</p>
                    <div className="bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30 p-4 rounded-lg mb-6">
                      <p className="text-primary-700 dark:text-primary-300 font-semibold">{program.impact}</p>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">{program.details}</p>
                    <button
                      onClick={() => setExpandedId(expandedId === program.id ? null : program.id)}
                      className="btn-primary text-sm py-2 px-4"
                    >
                      {expandedId === program.id ? 'Show Less' : 'How to Support'}
                    </button>
                  </div>
                </div>
                {expandedId === program.id && (
                  <div className="border-t border-slate-200 dark:border-slate-700 p-8 bg-slate-50 dark:bg-slate-900 bg-opacity-50">
                    <h4 className="font-bold mb-4">Ways You Can Support This Program:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-3">•</span>
                        <div>
                          <p className="font-semibold">Make a One-Time Donation</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Your contribution directly supports this program</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-3">•</span>
                        <div>
                          <p className="font-semibold">Set Up Monthly Giving</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Sustained support ensures long-term impact</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-3">•</span>
                        <div>
                          <p className="font-semibold">Volunteer Your Time</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Join our team of dedicated volunteers</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-600 font-bold mr-3">•</span>
                        <div>
                          <p className="font-semibold">Corporate Partnerships</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Collaborate with us for social impact</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 flex gap-4">
                      <a href="/donate" className="btn-primary text-sm py-2 px-4">Donate Now</a>
                      <a href="/get-involved" className="btn-secondary text-sm py-2 px-4">Get Involved</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Holistic Approach</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold mb-2 text-lg">1. Comprehensive Assessment</h3>
              <p className="text-slate-600 dark:text-slate-400">We evaluate each child's needs across education, health, and socioeconomic status to provide targeted support.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2 text-lg">2. Multi-Pronged Support</h3>
              <p className="text-slate-600 dark:text-slate-400">Combining education, healthcare, and skill development to ensure complete development.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2 text-lg">3. Community Engagement</h3>
              <p className="text-slate-600 dark:text-slate-400">Working closely with families and communities to ensure sustainability and local ownership.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-2 text-lg">4. Continuous Monitoring</h3>
              <p className="text-slate-600 dark:text-slate-400">Regular follow-ups and impact assessments to measure outcomes and improve our programs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs