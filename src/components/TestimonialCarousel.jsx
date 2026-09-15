import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TestimonialCarousel = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0)

  const defaultTestimonials = [
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

  const items = testimonials.length > 0 ? testimonials : defaultTestimonials
  const itemsPerView = 3

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - itemsPerView : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + itemsPerView >= items.length ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full">
      <div className="flex gap-6 overflow-hidden">
        {items.slice(current, current + itemsPerView).map((testimonial, index) => (
          <div key={index} className="flex-1 min-w-0">
            <div className="card p-6 h-full">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={handlePrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default TestimonialCarousel
