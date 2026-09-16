import React from 'react'
import { useData } from '../context/DataContext'

const Partners = () => {
  const { data } = useData()

  const categories = [
    { name: 'Foundation', partners: data.partners.filter(p => p.category === 'Foundation') },
    { name: 'Corporate', partners: data.partners.filter(p => p.category === 'Corporate') },
    { name: 'NGO', partners: data.partners.filter(p => p.category === 'NGO') },
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Our Partners & Supporters</h1>
          <p className="text-xl text-primary-50">Together, we're making a difference</p>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-16">
        <div className="container-custom">
          {categories.map((category) => (
            <div key={category.name} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-primary-600">{category.name} Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.partners.map(partner => (
                  <div key={partner.id} className="card p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg mb-8 text-primary-50">
            Join our growing network of organizations committed to changing children's lives. We welcome partnerships from corporate, foundations, and NGOs.
          </p>
          <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-slate-100 py-3 px-8">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Brand Visibility',
                description: 'Your organization gains recognition through our programs and communications',
              },
              {
                title: 'Social Impact',
                description: 'Meaningful contribution to child welfare and community development',
              },
              {
                title: 'Tax Benefits',
                description: 'Eligible for tax deductions under relevant sections',
              },
              {
                title: 'Employee Engagement',
                description: 'Volunteer programs and CSR initiatives for your team',
              },
              {
                title: 'Impact Reports',
                description: 'Detailed tracking of how your partnership is making a difference',
              },
              {
                title: 'Exclusive Events',
                description: 'Invite-only events and partnership milestones celebrations',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="card p-6">
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners