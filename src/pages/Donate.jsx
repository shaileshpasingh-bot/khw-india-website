import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import { Heart, ArrowRight } from 'lucide-react'

const Donate = () => {
  const { addDonation } = useData()
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [donationType, setDonationType] = useState('one-time')
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [step, setStep] = useState(1)

  const suggestedAmounts = [
    { amount: 500, impact: 'Supports 1 child\'s education for 1 month' },
    { amount: 1000, impact: 'Provides school supplies for 5 children' },
    { amount: 5000, impact: 'Funds a health check-up camp' },
    { amount: 10000, impact: 'Provides vocational training for 2 youth' },
    { amount: 50000, impact: 'Sponsors education for 10 children for 1 year' },
  ]

  const handleDonorChange = (e) => {
    const { name, value } = e.target
    setDonorInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleDonation = () => {
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount
    if (donorInfo.name && donorInfo.email) {
      addDonation({
        ...donorInfo,
        amount: finalAmount,
        type: donationType,
        date: new Date().toISOString(),
      })
      alert(`Thank you for your donation of ₹${finalAmount}! You will receive a receipt at ${donorInfo.email}`)
      setStep(1)
      setDonorInfo({ name: '', email: '', phone: '' })
      setCustomAmount('')
      setSelectedAmount(1000)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl text-primary-50">Your donation directly impacts the lives of underprivileged children</p>
        </div>
      </section>

      {/* Donation Flow */}
      <section className="py-16">
        <div className="container-custom max-w-2xl">
          {/* Step Indicator */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    s <= step
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step ? 'bg-primary-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Choose Amount & Type */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Choose Donation Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                      donationType === 'one-time'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30 text-primary-600'
                        : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    One-Time Donation
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                      donationType === 'monthly'
                        ? 'border-primary-600 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30 text-primary-600'
                        : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    Monthly Giving
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Select Amount</h2>
                <div className="space-y-3 mb-6">
                  {suggestedAmounts.map(item => (
                    <button
                      key={item.amount}
                      onClick={() => {
                        setSelectedAmount(item.amount)
                        setCustomAmount('')
                      }}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        selectedAmount === item.amount && !customAmount
                          ? 'border-primary-600 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-30'
                          : 'border-slate-300 dark:border-slate-600 hover:border-primary-600'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-lg">₹{item.amount.toLocaleString()}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{item.impact}</p>
                        </div>
                        {selectedAmount === item.amount && !customAmount && (
                          <span className="text-primary-600 font-bold">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="card p-4">
                  <label className="text-sm font-semibold mb-2 block">Or Enter Custom Amount</label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      if (e.target.value) setSelectedAmount(0)
                    }}
                    placeholder="Enter amount in ₹"
                    className="input-field"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="btn-primary w-full py-3"
              >
                Continue <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2: Donor Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleDonorChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleDonorChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleDonorChange}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="btn-secondary flex-1 py-2"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="btn-primary flex-1 py-2"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Review Your Donation</h2>
                <div className="card p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Donation Type:</span>
                    <span className="font-semibold">{donationType === 'one-time' ? 'One-Time' : 'Monthly'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Amount:</span>
                    <span className="font-bold text-2xl text-primary-600">
                      ₹{(customAmount || selectedAmount).toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Donor:</span>
                    <span className="font-semibold">{donorInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Email:</span>
                    <span className="font-semibold">{donorInfo.email}</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20 p-4 rounded-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <Heart className="inline w-4 h-4 mr-2 text-primary-600" />
                  A 80G tax receipt will be sent to your email address.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="btn-secondary flex-1 py-2"
                >
                  Back
                </button>
                <button
                  onClick={handleDonation}
                  className="btn-primary flex-1 py-2"
                >
                  Complete Donation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { amount: 500, impact: '✓ Provides books & supplies for 1 child' },
              { amount: 1000, impact: '✓ Covers school fees for 1 child for 1 month' },
              { amount: 5000, impact: '✓ Conducts a medical camp in rural area' },
              { amount: 10000, impact: '✓ Trains 2 youth in vocational skills' },
              { amount: 25000, impact: '✓ Supports 5 children\'s education for 1 year' },
              { amount: 50000, impact: '✓ Funds an entire scholarship program' },
            ].map((item, idx) => (
              <div key={idx} className="card p-4 text-sm">
                <p className="text-primary-600 font-bold mb-2">₹{item.amount.toLocaleString()}</p>
                <p className="text-slate-700 dark:text-slate-300">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-custom max-w-2xl">
          <h2 className="text-2xl font-bold mb-8">Donation FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Is my donation secure?', a: 'Yes, we use industry-standard encryption to secure all transactions.' },
              { q: 'Do I get a tax receipt?', a: 'Yes, we are 80G certified. A receipt will be sent to your email.' },
              { q: 'Can I cancel monthly giving?', a: 'Yes, you can cancel anytime. Contact us at info@khwindia.org' },
              { q: 'How much reaches the programs?', a: 'We maintain 98% fund utilization rate. Only 2% goes to administrative costs.' },
            ].map((faq, idx) => (
              <div key={idx} className="card p-4">
                <p className="font-semibold mb-2">{faq.q}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate