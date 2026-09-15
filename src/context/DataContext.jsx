import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

// Mock data initialization
const initialData = {
  auth: {
    isLoggedIn: false,
    user: null,
  },
  stats: {
    totalVisitors: 0,
    visitorsOver3Min: 0,
    avgSessionTime: 0,
    bounceRate: 0,
    visitorTimeline: [],
    trafficSources: {
      direct: 45,
      organic: 30,
      social: 15,
      referral: 10,
    },
    topPages: [
      { page: '/donate', views: 450 },
      { page: '/', views: 380 },
      { page: '/impact-stories', views: 290 },
      { page: '/programs', views: 210 },
      { page: '/get-involved', views: 180 },
    ],
    deviceBreakdown: {
      desktop: 55,
      mobile: 35,
      tablet: 10,
    },
  },
  impactStories: [
    {
      id: 1,
      title: 'Ravi\'s Journey to School',
      excerpt: 'From the streets to the classroom - Ravi\'s inspiring story.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7fe863a37f?w=400&h=300&fit=crop',
      category: 'Education',
      content: 'Ravi was once living on the streets, unable to attend school. Through KHW India\'s education program, he received support for school fees, books, and mentoring. Today, he\'s in the top of his class and dreams of becoming an engineer.',
      date: '2024-08-15',
    },
    {
      id: 2,
      title: 'Healthcare Saves Lives',
      excerpt: 'How our medical camp changed a family\'s future.',
      image: 'https://images.unsplash.com/photo-1631217314830-4970f9eba4d0?w=400&h=300&fit=crop',
      category: 'Healthcare',
      content: 'A family received free health screening and treatment through KHW India\'s healthcare initiative. Early detection of a medical condition saved a child\'s life.',
      date: '2024-08-01',
    },
    {
      id: 3,
      title: 'Skill Training Empowers Youth',
      excerpt: 'Young women gain independence through vocational training.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      category: 'Skills',
      content: 'Through our vocational training program, 50+ young women learned skills in tailoring, handicrafts, and digital literacy, gaining economic independence.',
      date: '2024-07-20',
    },
  ],
  programs: [
    {
      id: 1,
      name: 'Education Support',
      description: 'Providing quality education to underprivileged children',
      image: 'https://images.unsplash.com/photo-1427504494785-cdcd202092d7?w=400&h=300&fit=crop',
      impact: '500+ children supported annually',
      details: 'Our education program includes school fees, learning materials, tutoring, and scholarships. We focus on keeping children in school and ensuring quality education.',
    },
    {
      id: 2,
      name: 'Healthcare Initiative',
      description: 'Medical camps and health awareness programs',
      image: 'https://images.unsplash.com/photo-1631217314830-4970f9eba4d0?w=400&h=300&fit=crop',
      impact: '2000+ people reached annually',
      details: 'Regular medical camps in rural areas, health awareness workshops, and emergency medical support for families in need.',
    },
    {
      id: 3,
      name: 'Skill Development',
      description: 'Vocational training for youth empowerment',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      impact: '100+ youth trained yearly',
      details: 'Training programs in digital literacy, tailoring, handicrafts, and other skills to ensure economic independence and employment.',
    },
  ],
  volunteers: [],
  donations: [],
  eventRegistrations: [],
  contactSubmissions: [],
  volunteerApplications: [],
  events: [
    {
      id: 1,
      title: 'Annual Charity Gala',
      date: '2024-10-15',
      location: 'Grand Ballroom, Mumbai',
      description: 'Join us for our annual fundraising gala benefiting education programs.',
      image: 'https://images.unsplash.com/photo-1519671482677-d6bbb9ac8e2e?w=400&h=300&fit=crop',
      registrations: [],
    },
    {
      id: 2,
      title: 'Medical Camp - Rural Villages',
      date: '2024-09-20',
      location: 'Various rural locations',
      description: 'Free health screening and medical treatment in underserved communities.',
      image: 'https://images.unsplash.com/photo-1631217314830-4970f9eba4d0?w=400&h=300&fit=crop',
      registrations: [],
    },
  ],
  partners: [
    {
      id: 1,
      name: 'Global Aid Foundation',
      logo: 'https://via.placeholder.com/200x100?text=Global+Aid',
      category: 'Foundation',
    },
    {
      id: 2,
      name: 'TechCorp Solutions',
      logo: 'https://via.placeholder.com/200x100?text=TechCorp',
      category: 'Corporate',
    },
    {
      id: 3,
      name: 'Community First NGO',
      logo: 'https://via.placeholder.com/200x100?text=Community',
      category: 'NGO',
    },
  ],
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('appData')
      return saved ? JSON.parse(saved) : initialData
    }
    return initialData
  })

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('appData', JSON.stringify(data))
  }, [data])

  // Simulate visitor tracking
  useEffect(() => {
    const sessionStartTime = Date.now()
    const visitorId = `visitor_${Date.now()}`

    // Track visitor time
    const timer = setInterval(() => {
      const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000 / 60) // in minutes
      
      setData((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          totalVisitors: prev.stats.totalVisitors + (sessionDuration === 1 ? 1 : 0), // Add visitor on first minute
          visitorsOver3Min:
            sessionDuration > 3
              ? prev.stats.visitorsOver3Min + 1
              : prev.stats.visitorsOver3Min,
          avgSessionTime:
            sessionDuration > 0
              ? Math.round(
                  (prev.stats.avgSessionTime + sessionDuration) / 2
                )
              : prev.stats.avgSessionTime,
        },
      }))
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const addImpactStory = (story) => {
    setData((prev) => ({
      ...prev,
      impactStories: [
        ...prev.impactStories,
        { ...story, id: Date.now(), date: new Date().toISOString().split('T')[0] },
      ],
    }))
  }

  const updateImpactStory = (id, updatedStory) => {
    setData((prev) => ({
      ...prev,
      impactStories: prev.impactStories.map((s) =>
        s.id === id ? { ...s, ...updatedStory } : s
      ),
    }))
  }

  const deleteImpactStory = (id) => {
    setData((prev) => ({
      ...prev,
      impactStories: prev.impactStories.filter((s) => s.id !== id),
    }))
  }

  const addDonation = (donation) => {
    setData((prev) => ({
      ...prev,
      donations: [...prev.donations, { ...donation, id: Date.now() }],
    }))
  }

  const addVolunteerApplication = (application) => {
    setData((prev) => ({
      ...prev,
      volunteerApplications: [
        ...prev.volunteerApplications,
        { ...application, id: Date.now(), status: 'pending' },
      ],
    }))
  }

  const updateVolunteerStatus = (id, status) => {
    setData((prev) => ({
      ...prev,
      volunteerApplications: prev.volunteerApplications.map((v) =>
        v.id === id ? { ...v, status } : v
      ),
    }))
  }

  const addEventRegistration = (registration) => {
    setData((prev) => ({
      ...prev,
      eventRegistrations: [
        ...prev.eventRegistrations,
        { ...registration, id: Date.now() },
      ],
    }))
  }

  const addContactSubmission = (submission) => {
    setData((prev) => ({
      ...prev,
      contactSubmissions: [
        ...prev.contactSubmissions,
        { ...submission, id: Date.now() },
      ],
    }))
  }

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        addImpactStory,
        updateImpactStory,
        deleteImpactStory,
        addDonation,
        addVolunteerApplication,
        updateVolunteerStatus,
        addEventRegistration,
        addContactSubmission,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}
