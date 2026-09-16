import React, { useState } from 'react'
import { useData } from '../../context/DataContext'
import { Edit2, X } from 'lucide-react'

const AdminPrograms = () => {
  const { data, setData } = useData()
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({})

  const handleEdit = (program) => {
    setFormData(program)
    setEditingId(program.id)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(prev => ({
      ...prev,
      programs: prev.programs.map(p => (p.id === editingId ? formData : p)),
    }))
    setEditingId(null)
    setFormData({})
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Programs</h2>

      {editingId && (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Edit Program</h3>
            <button onClick={() => setEditingId(null)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Program Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleFormChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description || ''}
                onChange={handleFormChange}
                rows="3"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Impact Statement</label>
              <input
                type="text"
                name="impact"
                value={formData.impact || ''}
                onChange={handleFormChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Details</label>
              <textarea
                name="details"
                value={formData.details || ''}
                onChange={handleFormChange}
                rows="4"
                className="input-field"
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn-primary py-2 px-6">
                Update Program
              </button>
              <button
                type="button"
                onClick={() => setEditingId(null)}
                className="btn-secondary py-2 px-6"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {data.programs.map(program => (
          <div key={program.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div>
                <h3 className="font-bold mb-1">{program.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{program.description}</p>
                <p className="text-sm text-primary-600 font-semibold mt-2">{program.impact}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Program Details:</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{program.details}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleEdit(program)}
                  className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded text-blue-600 dark:text-blue-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPrograms