"use client";

import React from 'react';
import { 
  MailIcon,
  PinIcon,
  DeviceMobileIcon,
  GlobeIcon,
  GitBranchIcon
} from '@primer/octicons-react';

const contactInfo = [
  {
    icon: 'PinIcon',
    title: 'Location',
    value: 'Indonesia',
    link: 'https://maps.google.com/?q=Indonesia'
  },
  {
    icon: 'MailIcon',
    title: 'Email',
    value: 'aris.hadisopiyan@gmail.com',
    link: 'mailto:aris.hadisopiyan@gmail.com'
  },
  {
    icon: 'DeviceMobileIcon',
    title: 'Phone',
    value: '+62 821-9927-5053',
    link: 'https://wa.me/6282199275053'
  },
  {
    icon: 'GlobeIcon',
    title: 'Website',
    value: 'omeans-team.github.io',
    link: 'https://omeans-team.github.io'
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/arishadisopiyan',
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/omeans-team',
    color: '#333'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/aya.erisu',
    color: '#E4405F'
  }
];

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">OMEANS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The most powerful and accessible development platform.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <div className="mr-3">
                    {info.icon === 'PinIcon' && <PinIcon size={16} className="text-blue-400" />}
                    {info.icon === 'MailIcon' && <MailIcon size={16} className="text-green-400" />}
                    {info.icon === 'DeviceMobileIcon' && <DeviceMobileIcon size={16} className="text-purple-400" />}
                    {info.icon === 'GlobeIcon' && <GlobeIcon size={16} className="text-cyan-400" />}
                  </div>
                  <span>{info.value}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="footer-link">Web Development</a></li>
              <li><a href="#services" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">UI/UX Design</a></li>
              <li><a href="#services" className="footer-link">Consulting</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#projects" className="footer-link">Portfolio</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#team" className="footer-link">Team</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media & Status */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.354 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-medium text-sm">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-xs">
                Accepting freelance opportunities and full-time positions.
              </p>
            </div>

            {/* Response Time */}
            <div>
              <h5 className="text-white font-medium text-sm mb-2">Response Time</h5>
              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span>Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Social:</span>
                  <span>Within 12 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Omeans Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
