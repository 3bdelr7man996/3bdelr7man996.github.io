'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <div className="h-1 w-16 bg-purple-600 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-purple-300"></div>

          <div className="space-y-12 relative">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card p-6"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-mono font-bold text-gray-900 text-lg">{exp.title}</h3>
                    </div>
                    <p className="text-purple-600 font-mono text-sm font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-xs font-mono mb-4">{exp.period}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIdx) => (
                        <li key={descIdx} className="text-gray-700 text-sm leading-relaxed flex gap-2">
                          <span className="text-purple-600 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="tag-pill">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
