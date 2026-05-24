export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string[];
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: '1',
    company: 'TechRoute',
    title: 'Flutter Developer',
    period: 'Nov 2025 – Present',
    description: [
      'Developing Garage360, a cross-platform auto-repair management app using Clean Architecture + BLoC',
      'Built AI-powered Pool Pal for real-time pool water quality analysis with camera integration',
      'Scalable API integrations, secure storage, Firebase analytics and crash reporting',
    ],
    highlights: ['Clean Architecture', 'BLoC', 'AI Integration', 'Firebase'],
  },
  {
    id: '2',
    company: 'Tarseya',
    title: 'Flutter Developer',
    period: 'Oct 2024 – Nov 2025',
    description: [
      'Built JLAM, a scalable real estate platform with advanced map/geolocation + modular architecture',
      'Developed Anaya, a healthcare platform with role-based navigation using Provider',
      'Delivered KidCart, an e-commerce app with responsive UI and real-time push notifications',
    ],
    highlights: ['Real Estate', 'Healthcare', 'E-commerce', 'Geolocation'],
  },
  {
    id: '3',
    company: 'DLT',
    title: 'Flutter Developer',
    period: 'Jul 2022 – Oct 2024',
    description: [
      'Developed Umbrella, a multi-vendor marketplace using Repository Pattern + Clean Architecture',
      'Integrated REST APIs and Firebase for full e-commerce flows including payments and search',
      'Implemented multi-language support and performance optimization via caching',
    ],
    highlights: ['Marketplace', 'REST APIs', 'Payments', 'Localization'],
  },
  {
    id: '4',
    company: 'Home Healers',
    title: 'Flutter Developer (Part-Time)',
    period: 'Dec 2020 – Jan 2025',
    description: [
      'Built telemedicine platform with appointment booking and real-time audio/video chat',
      'Architecture: BLoC/Cubit + GetIt dependency injection + Clean Architecture',
      'Medical records handling, multi-language support, and maps integration',
    ],
    highlights: ['Telemedicine', 'Real-time Chat', 'Healthcare', 'Payments'],
  },
  {
    id: '5',
    company: 'BAS',
    title: 'Flutter Developer',
    period: 'Jan 2022 – Jul 2022',
    description: [
      'Led full rebuild of the BAS platform from scratch using Flutter',
      'Developed real-time communication layer using Socket.IO',
      'Rebuilt the web-based admin dashboard using Flutter Web',
    ],
    highlights: ['Platform Rebuild', 'Socket.IO', 'Flutter Web', 'Real-time'],
  },
  {
    id: '6',
    company: 'DSM',
    title: 'Mobile Developer',
    period: 'Aug 2021 – Dec 2021',
    description: [
      'Reskinning and new features for YK e-commerce application',
      'Bug fixing and performance tuning for Elherafyeen application',
      'Performance optimization across Android and iOS',
    ],
    highlights: ['E-commerce', 'Performance', 'Bug Fixes', 'iOS/Android'],
  },
];
