'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      description: 'oabdo239@gmail.com',
      link: 'mailto:oabdo239@gmail.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Message me on WhatsApp',
      link: 'https://wa.me/201145810006',
      action: 'Start Chat',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      link: 'https://www.linkedin.com/in/abdelrhman-omar-926227137/',
      action: 'Connect',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you're looking for a Flutter engineer to join your team, a reliable freelance partner, or simply want to connect — I'm available and responsive.
            </p>
            <p className="text-purple-600 font-mono text-sm">
              <span className="text-purple-600">&gt;</span> Currently open to full-time & freelance opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              const isWhatsApp = contact.title === 'WhatsApp';
              return (
                <motion.a
                  key={idx}
                  href={contact.link}
                  target={isWhatsApp ? '_blank' : undefined}
                  rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  className="glass-card p-4 flex items-start gap-4 hover:shadow-violet-md transition-all duration-300 block"
                >
                  <Icon size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="font-mono font-bold text-gray-900">{contact.title}</h3>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-purple-100 text-center"
        >
          <p className="text-gray-600 font-mono text-sm mb-6">
            Connect on social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/3bdelr7man996"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:shadow-violet-md transition-all duration-300 hover:bg-purple-50"
            >
              <Github size={20} className="text-gray-700 hover:text-purple-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrhman-omar-926227137/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:shadow-violet-md transition-all duration-300 hover:bg-purple-50"
            >
              <Linkedin size={20} className="text-gray-700 hover:text-purple-600" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
