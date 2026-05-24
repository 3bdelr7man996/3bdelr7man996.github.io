'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-mono font-bold mb-2">
              <span className="text-purple-400">&lt;</span>
              AO
              <span className="text-purple-400">/&gt;</span>
            </div>
            <p className="text-gray-400 font-mono text-sm">
              Abdelrhman Omar — Flutter Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/3bdelr7man996"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrhman-omar-926227137/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:oabdo239@gmail.com"
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-all duration-200"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-mono text-sm mb-4">
            © 2025 Abdelrhman Omar. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-200"
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  );
}
