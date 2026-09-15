import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 dark:bg-black text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kinderhilfswerk India</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Helping children, building futures. Supporting underprivileged children through education, healthcare, and skills training.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.programs')}
                </Link>
              </li>
              <li>
                <Link to="/impact-stories" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.stories')}
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.donate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/transparency" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.transparency')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-slate-300">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Mumbai, India 400001</span>
              </li>
              <li className="flex gap-2 text-slate-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2 text-slate-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@khwindia.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
