import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, BookOpen, Stethoscope } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useData } from '../context/DataContext'
import ImpactCounter from '../components/ImpactCounter'
import TestimonialCarousel from '../components/TestimonialCarousel'

const Home = () => {
  const { t } = useLanguage()
  const { data } = useData()
  const [email, setEmail] = useState('')

  const handleNewsletterSignup = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  const stats = [
    { label: 'Children Supported', value: '500+' },
    { label: 'People Reached', value: '2000+' },
    { label: 'Volunteers', value: '100+' },
    { label: 'Programs', value: '5+' },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Teacher',
      content: 'KHW India transformed our school. Students have better access to resources now.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      content: 'My child got the opportunity to attend school thanks to their support. Grateful forever!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Volunteer',
      content: 'Being part of this mission has been the most fulfilling experience of my life.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Helping Children, Building Futures</h1>
            <p className="text-xl mb-8 text-primary-50">Providing education, healthcare, and opportunities to underprivileged children across India</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn-primary bg-white text-primary-600 hover:bg-slate-100">
                Donate Now <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link to="/get-involved" className="btn-secondary border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-8 text-center">
                <ImpactCounter end={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.programs.map((program) => (
              <div key={program.id} className="card card-hover overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{program.description}</p>
                  <p className="text-primary-600 font-semibold text-sm mb-4">{program.impact}</p>
                  <Link to="/programs" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Latest Impact Stories */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {data.impactStories.slice(0, 3).map((story) => (
              <div key={story.id} className="card card-hover overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 uppercase">{story.category}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2">{story.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{story.excerpt}</p>
                  <Link to="/impact-stories" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Read Full Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/impact-stories" className="btn-primary">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-primary-50">Subscribe to our newsletter to get updates on our programs and impact stories</p>
          <form onSubmit={handleNewsletterSignup} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button type="submit" className="btn-primary bg-white text-primary-600 hover:bg-slate-100 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {data.partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-24 object-contain hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home