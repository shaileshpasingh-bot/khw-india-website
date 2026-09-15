import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ImpactStories from './pages/ImpactStories'
import GetInvolved from './pages/GetInvolved'
import Events from './pages/Events'
import Partners from './pages/Partners'
import Transparency from './pages/Transparency'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { DataProvider } from './context/DataContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/impact-stories" element={<ImpactStories />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/transparency" element={<Transparency />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin/dashboard/*"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
