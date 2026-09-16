import React from 'react'
import { PieChart, BarChart, Download } from 'lucide-react'

const Transparency = () => {
  const fundBreakdown = [
    { category: 'Education Programs', percentage: 45, amount: '₹45,00,000' },
    { category: 'Healthcare Initiatives', percentage: 25, amount: '₹25,00,000' },
    { category: 'Skills Training', percentage: 15, amount: '₹15,00,000' },
    { category: 'Administration', percentage: 10, amount: '₹10,00,000' },
    { category: 'Fundraising Costs', percentage: 5, amount: '₹5,00,000' },
  ]

  const financialReports = [
    {
      id: 1,
      year: '2024',
      quarter: 'Q1',
      totalFunds: '₹1,00,00,000',
      childrenSupported: 450,
      healthCampsDone: 5,
    },
    {
      id: 2,
      year: '2023',
      quarter: 'Full Year',
      totalFunds: '₹3,50,00,000',
      childrenSupported: 1200,
      healthCampsDone: 20,
    },
    {
      id: 3,
      year: '2022',
      quarter: 'Full Year',
      totalFunds: '₹2,80,00,000',
      childrenSupported: 950,
      healthCampsDone: 18,
    },
  ]

  const downloadReport = (year) => {
    alert(`Downloading ${year} financial report...`)
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Transparency & Financials</h1>
          <p className="text-xl text-primary-50">Full accountability to our stakeholders</p>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our Commitment to Transparency</h2>
          <div className="card p-8 space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Kinderhilfswerk Society India is committed to full transparency in our operations and financial management. We believe our donors and stakeholders deserve complete visibility into how funds are utilized and the impact created.
            </p>
            <p>
              <strong>Key Principles:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>98% of funds directly support programs (only 2% administrative costs)</li>
              <li>Annual audited financial statements published publicly</li>
              <li>Donor reports available upon request</li>
              <li>Monthly impact updates on social media</li>
              <li>Open door policy for stakeholder visits and queries</li>
              <li>Regular third-party audits and evaluations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fund Breakdown */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Where Your Money Goes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pie Chart Representation */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Pie chart segments - simplified representation */}
                  <circle cx="50" cy="50" r="40" fill="#22c55e" />
                  <circle cx="50" cy="50" r="35" fill="#ef4444" />
                  <circle cx="50" cy="50" r="30" fill="#f97316" />
                  <circle cx="50" cy="50" r="25" fill="#eab308" />
                  <circle cx="50" cy="50" r="20" fill="#8b5cf6" />
                  <circle cx="50" cy="50" r="15" fill="white" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-semibold">₹1 Crore</p>
                    <p className="text-xs text-slate-600">2024 Fund</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fund Breakdown Details */}
            <div className="space-y-4">
              {fundBreakdown.map((item, idx) => (
                <div key={idx} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{item.category}</h3>
                    <span className="text-primary-600 font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialReports.map(report => (
              <div key={report.id} className="card p-6">
                <h3 className="text-lg font-bold mb-4 text-primary-600">{report.year} {report.quarter}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Total Funds Collected</p>
                    <p className="text-2xl font-bold">{report.totalFunds}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Children Supported</p>
                    <p className="text-2xl font-bold">{report.childrenSupported}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Medical Camps Conducted</p>
                    <p className="text-2xl font-bold">{report.healthCampsDone}</p>
                  </div>
                </div>
                <button
                  onClick={() => downloadReport(report.year)}
                  className="btn-outline text-sm py-2 px-4 w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Summary */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">2024 Annual Summary</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Revenue Overview
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm ml-10">
                <li>✓ Individual Donations: ₹65,00,000</li>
                <li>✓ Corporate Partnerships: ₹25,00,000</li>
                <li>✓ Grants & Foundations: ₹10,00,000</li>
                <li>✓ Total: ₹1,00,00,000</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Impact Metrics
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm ml-10">
                <li>✓ 450+ Children received educational support</li>
                <li>✓ 1500+ People reached through healthcare initiatives</li>
                <li>✓ 60+ Youth trained in vocational skills</li>
                <li>✓ 100+ Active volunteers</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Fund Utilization
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm ml-10">
                <li>✓ Program Expenses: ₹98,00,000 (98%)</li>
                <li>✓ Administrative Costs: ₹1,50,000 (1.5%)</li>
                <li>✓ Reserves: ₹50,000 (0.5%)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audit & Certifications */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Audit & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: 'ISO 9001', desc: 'Quality Management' },
              { title: 'Annual Audit', desc: 'By CA Firm' },
              { title: 'NGO Darpan', desc: 'Government Registration' },
              { title: '80G', desc: 'Tax Exemption Certificate' },
            ].map((cert, idx) => (
              <div key={idx} className="card p-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">✓</div>
                <h3 className="font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transparency