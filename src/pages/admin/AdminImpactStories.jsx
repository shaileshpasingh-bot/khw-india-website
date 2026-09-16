import React, { useState } from 'react'
import { useData } from '../../context/DataContext'
import { Trash2, Edit2, Plus, X } from 'lucide-react'

const AdminImpactStories = () => {
  const { data, addImpactStory, updateImpactStory, deleteImpactStory } = useData()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Education',
    content: '',
    image: '',
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      updateImpactStory(editingId, formData)
      setEditingId(null)
    } else {
      addImpactStory(formData)
    }
    setFormData({ title: '', excerpt: '', category: 'Education', content: '', image: '' })
    setShowForm(false)
  }

  const handleEdit = (story) => {
    setFormData(story)
    setEditingId(story.id)
    setShowForm(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Impact Stories</h2>
        <button
          onClick={() => {
            setFormData({ title: '', excerpt: '', category: 'Education', content: '', image: '' })
            setEditingId(null)
            setShowForm(!showForm)
          }}
          className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Story
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">{editingId ? 'Edit Story' : 'Add New Story'}</h3>
            <button onClick={() => setShowForm(false)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Title *</label>
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
              <label className="block text-sm font-semibold mb-2">Excerpt *</label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleFormChange}
                required
                className="input-field"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label className="block text-sm font-semibold mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleFormChange}
                  className="input-field"
                  placeholder="https://..."
                />
              </div>
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
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn-primary py-2 px-6">
                {editingId ? 'Update' : 'Add'} Story
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
      )}

      <div className="space-y-4">
        {data.impactStories.map(story => (
          <div key={story.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold mb-2">{story.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{story.excerpt}</p>
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30 px-2 py-1 rounded">
                  {story.category}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(story)}
                  className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded text-blue-600 dark:text-blue-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteImpactStory(story.id)}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-600 dark:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminImpactStories