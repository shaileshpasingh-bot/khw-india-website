import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { X } from 'lucide-react'

const ImpactStories = () => {
  const { data } = useData()
  const [selectedStory, setSelectedStory] = useState(null)
  const [filterCategory, setFilterCategory] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Education',
    content: '',
    yourName: '',
    yourEmail: '',
  })

  const categories = ['All', 'Education', 'Healthcare', 'Skills']
  const filteredStories = filterCategory === 'All'
    ? data.impactStories
    : data.impactStories.filter(s => s.category === filterCategory)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your story has been submitted for review.')
    setFormData({
      title: '',
      excerpt: '',
      category: 'Education',
      content: '',
      yourName: '',
      yourEmail: '',
    })
    setShowForm(false)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Impact Stories</h1>
          <p className="text-xl text-primary-50">Real stories of transformation and hope</p>
        </div>
      </section>

      {/* Filter & Submit */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filterCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary text-sm py-2 px-4"
            >
              Submit Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <div key={story.id} className="card card-hover overflow-hidden cursor-pointer" onClick={() => setSelectedStory(story)}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-600 uppercase">{story.category}</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">{story.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{story.excerpt}</p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <h2 className="text-2xl font-bold">{selectedStory.title}</h2>
              <button onClick={() => setSelectedStory(null)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <span className="text-sm font-semibold text-primary-600 uppercase">{selectedStory.category}</span>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Published: {selectedStory.date}</p>
              <div className="mt-6 prose dark:prose-invert max-w-none">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{selectedStory.content}</p>
              </div>
              <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20 rounded-lg">
                <h3 className="font-bold mb-2">Help more children like in this story</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Your donation can directly impact the lives of children in our programs.</p>
                <a href="/donate" className="btn-primary text-sm py-2 px-4">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Story Form */}
      {showForm && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container-custom max-w-2xl">
            <h2 className="text-2xl font-bold mb-8">Share Your Story</h2>
            <form onSubmit={handleFormSubmit} className="card p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleFormChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Your Email *</label>
                <input
                  type="email"
                  name="yourEmail"
                  value={formData.yourEmail}
                  onChange={handleFormChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Story Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="input-field"
                >
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Skills</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Short Excerpt *</label>
                <input
                  type="text"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleFormChange}
                  maxLength="100"
                  required
                  className="input-field"
                  placeholder="One-line summary (max 100 characters)"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Full Story *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleFormChange}
                  required
                  rows="6"
                  className="input-field"
                  placeholder="Tell us your story..."
                />
              </div>
              <div className="flex gap-4">
                <button type="submit" className="btn-primary py-2 px-6">
                  Submit Story
                </button>
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
    </div>
  )
}

export default ImpactStories