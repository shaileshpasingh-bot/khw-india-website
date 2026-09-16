import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const { addContactSubmission } = useData()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I make a donation?',
      answer: 'You can donate through our website on the Donate page. We accept all major payment methods and offer both one-time and recurring donations.',
    },
    {
      id: 2,
      question: 'Can I volunteer for KHW India?',
      answer: 'Absolutely! We welcome volunteers. Visit our Get Involved page to see available volunteer roles and submit your application.',
    },
    {
      id: 3,
      question: 'How can I verify your credentials?',
      answer: 'We are registered as an NGO under the Ministry of Corporate Affairs. You can verify our registration through the NGO Darpan portal. See our Transparency page for more details.',
    },
    {
      id: 4,
      question: 'Do I get a tax receipt for donations?',
      answer: 'Yes, we are registered under Section 80G of the Income Tax Act. All donors receive tax-deductible receipts.',
    },
    {
      id: 5,
      question: 'How can I receive regular updates?',
      answer: 'Subscribe to our newsletter on the home page or follow us on social media for regular updates on our programs and impact stories.',
    },
    {
      id: 6,
      question: 'Can companies partner with us?',
      answer: 'Yes! We welcome corporate partnerships and CSR collaborations. Please fill out the contact form and we\'ll get in touch with you soon.',
    },
  ]

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addContactSubmission(formData)
    alert('Thank you for reaching out! We will respond to your inquiry within 24 hours.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-50">We'd love to hear from you. Get in touch with us today.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card p-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Mumbai, India 400001</p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">info@khwindia.org</p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Mon - Fri: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
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
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows="5"
                      className="input-field"
                    />
                  </div>
                  <button type="submit" className="btn-primary py-3 px-6 w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Our Location</h2>
          <div className="w-full h-96 bg-slate-300 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-500 mx-auto mb-2" />
              <p className="text-slate-600 dark:text-slate-400">Map would be displayed here</p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="card overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span className="text-primary-600 font-bold">{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700 pt-4">
                    <p className="text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom text-center">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(platform => (
              <a
                key={platform}
                href="#"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold text-sm"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact