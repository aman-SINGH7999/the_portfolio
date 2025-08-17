'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amansing7999@gmail.com',
      href: 'mailto:amansing7999@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9140375468',
      href: 'tel:+919140375468'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sonbhadra, Uttar Pradesh',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aman-SINGH7999', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-singh-881256297/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AmanSing7999', label: 'Twitter' }
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I’m always open to discussing new opportunities, creative ideas, or
            potential collaborations.
          </p>
        </motion.div>

        {/* Contact info + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-10 text-center"
        >
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 flex flex-col items-center space-y-3 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <h4 className="text-xl font-semibold text-white mb-4">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
