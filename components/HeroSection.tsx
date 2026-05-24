'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const roles = ['Flutter Developer', 'Mobile Architect', 'Cross-Platform Engineer', 'Clean Code Advocate'];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    setDisplayedText('');

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 violet-mesh-bg pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-4"
            >
              <span className="text-purple-600 font-mono text-sm">&lt;</span>
              <span className="text-purple-600 font-mono text-sm">Flutter Developer</span>
              <span className="text-purple-600 font-mono text-sm animate-blink">/&gt;</span>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-mono font-bold text-gray-900 mb-4 leading-tight">
            Abdelrhman Omar
          </h1>

          <div className="h-12 mb-6">
            <p className="text-2xl md:text-3xl font-mono text-purple-600 font-semibold">
              {displayedText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Flutter Developer with 4+ years of experience in mobile application development. Proficient in Dart and modern state management solutions including BLoC, Provider, and Cubit. Proven track record of architecting scalable cross-platform apps, refactoring legacy systems, and implementing real-time features. Passionate about building novel products and optimizing performance across Android and iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-center"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-center"
            >
              Contact Me
            </button>
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1Voa-D04y4WM7GluL9mfkoctmWe12meWr&export=download"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/3bdelr7man996"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-purple-50 rounded-lg transition-all"
            >
              <Github size={20} className="text-gray-700 hover:text-purple-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrhman-omar-926227137/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-purple-50 rounded-lg transition-all"
            >
              <Linkedin size={20} className="text-gray-700 hover:text-purple-600" />
            </a>
            <a
              href="mailto:oabdo239@gmail.com"
              className="p-2 hover:bg-purple-50 rounded-lg transition-all"
            >
              <Mail size={20} className="text-gray-700 hover:text-purple-600" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative glass-card p-8 bg-gradient-to-br from-purple-50 to-white">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <p className="text-gray-600 font-mono text-sm">Profile Photo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-0 right-0 w-full"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard number="4+" label="Years Experience" />
          <StatCard number="10+" label="Apps Deployed" />
          <StatCard number="5+" label="Countries Served" />
          <StatCard number="15+" label="Professional Projects" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-purple-600" />
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="glass-card p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-purple-600 font-mono">{number}</div>
      <div className="text-xs md:text-sm text-gray-600 font-mono mt-1">{label}</div>
    </div>
  );
}
