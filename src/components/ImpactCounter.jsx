import React, { useState, useEffect } from 'react'

const ImpactCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationId

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Extract number from string like "500+"
      const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ''))
      const current = Math.floor(numericEnd * progress)
      setCount(current)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  // Keep the original format (with +) if it exists
  const displayValue = end.toString().includes('+') ? `${count}+` : count

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-600 mb-2">{displayValue}</div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </div>
  )
}

export default ImpactCounter
