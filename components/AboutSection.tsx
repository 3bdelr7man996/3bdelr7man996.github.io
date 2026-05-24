'use client';

import { motion } from 'framer-motion';
import { Zap, Globe, Users } from 'lucide-react';

export default function AboutSection() {
  const traits = [
    {
      icon: Zap,
      title: 'The Pragmatic Architect',
      subtitle: 'I don\'t just write code; I design systems.',
    },
    {
      icon: Globe,
      title: 'Adaptive & Multidisciplinary',
      subtitle: 'CCNA to Xamarin — a lifelong commitment to the full stack.',
    },
    {
      icon: Users,
      title: 'Global Collaborator',
      subtitle: 'Teams across Jordan, Saudi Arabia, Turkey, and Egypt.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {traits.map((trait, idx) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:shadow-violet-md transition-all duration-300"
              >
                <Icon size={32} className="text-purple-600 mb-4" />
                <h3 className="font-mono text-lg font-bold text-gray-900 mb-2">{trait.title}</h3>
                <p className="text-gray-600 text-sm">{trait.subtitle}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="font-mono text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a senior-level Flutter and Dart developer who views software development as the intersection of rigid engineering principles and fluid user experience. With over four years of experience, I have transitioned from building features to architecting complex, enterprise-grade systems like Garage360 and JLAM, consistently prioritizing Clean Architecture and SOLID principles to ensure long-term scalability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I am deeply motivated by the challenge of "rebuilding" — whether leading the initiative to recreate the BAS platform from scratch or refactoring legacy systems into modern, modular architectures. I thrive in environments that require high-stakes problem solving, such as implementing real-time communication layers with Socket.IO or developing AI-powered analysis tools for water quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="font-mono text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-purple-600 font-mono font-bold">📍</span>
                <p className="text-gray-700">Egypt</p>
              </div>
              <div>
                <span className="text-purple-600 font-mono font-bold">🎓</span>
                <p className="text-gray-700">Bachelor's in Computer Science</p>
              </div>
              <div>
                <span className="text-purple-600 font-mono font-bold">💼</span>
                <p className="text-gray-700">Open to Work</p>
              </div>
              <div>
                <span className="text-purple-600 font-mono font-bold">🌐</span>
                <p className="text-gray-700">Arabic (native), English (professional)</p>
              </div>
              <div>
                <span className="text-purple-600 font-mono font-bold">✉️</span>
                <p className="text-gray-700">oabdo239@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
