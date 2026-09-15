import React from 'react'
import { Heart, Eye, Zap } from 'lucide-react'

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Dr. Amit Singh',
      role: 'Founder & CEO',
      bio: 'Passionate about child welfare with 20+ years of experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Neha Verma',
      role: 'Program Director',
      bio: 'Leading our education and healthcare initiatives',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Rajesh Patel',
      role: 'Operations Manager',
      bio: 'Ensuring efficient delivery of all programs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Community Outreach',
      bio: 'Building bridges with communities we serve',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    },
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">About Kinderhilfswerk Society India</h1>
          <p className="text-xl text-primary-50">Our mission, vision, and the team behind the impact</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-8 text-center">
              <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-slate-600 dark:text-slate-400">
                To provide underprivileged children in India with access to quality education, healthcare, and skill development opportunities, empowering them to build better futures.
              </p>
            </div>
            <div className="card p-8 text-center">
              <Eye className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-slate-600 dark:text-slate-400">
                A world where every child, regardless of their socioeconomic background, has equal access to education and opportunities to reach their full potential.
              </p>
            </div>
            <div className="card p-8 text-center">
              <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="text-slate-600 dark:text-slate-400 text-left space-y-2">
                <li>✓ Compassion & Empathy</li>
                <li>✓ Integrity & Transparency</li>
                <li>✓ Inclusivity & Diversity</li>
                <li>✓ Impact & Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Kinderhilfswerk Society India was founded in 2010 with a simple yet powerful vision: to change the lives of underprivileged children in India through education and healthcare.
            </p>
            <p>
              What started as a small initiative to support a few children in a rural village has grown into a comprehensive organization reaching thousands of children annually across multiple states.
            </p>
            <p>
              Over the past 14 years, we have:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provided educational support to over 5,000 children</li>
              <li>Organized 200+ medical camps reaching 50,000+ people</li>
              <li>Trained 2,000+ youth in vocational skills</li>
              <li>Built partnerships with governments and NGOs</li>
              <li>Maintained 98% transparency in fund utilization</li>
            </ul>
            <p>
              Today, we continue our mission with unwavering commitment, guided by our core values and the trust of our donors, volunteers, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="card card-hover text-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Link */}
      <section className="py-12 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Committed to Transparency</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            We believe in full accountability to our stakeholders. View our detailed financial reports and impact metrics on our Transparency page.
          </p>
          <a href="/transparency" className="btn-primary">View Our Financials</a>
        </div>
      </section>
    </div>
  )
}

export default About