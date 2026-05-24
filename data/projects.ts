export interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  stack: string[];
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Garage360',
    description: 'Enterprise auto-repair shop management with Digital Vehicle Inspection (DVI), barcode scanning, and real-time notifications.',
    category: ['Professional', 'Healthcare'],
    stack: ['Flutter', 'Clean Architecture', 'BLoC', 'Firebase'],
    featured: true,
  },
  {
    id: '2',
    title: 'Pool Pal',
    description: 'AI-powered pool water quality analysis via camera integration with Gemini AI and multi-language support.',
    category: ['Professional', 'AI'],
    stack: ['Flutter', 'Gemini AI', 'BLoC', 'Firebase'],
    featured: true,
  },
  {
    id: '3',
    title: 'JLAM',
    description: 'Scalable real estate platform with feature-based modular architecture and advanced geolocation capabilities.',
    category: ['Professional', 'Real-time'],
    stack: ['Flutter', 'BLoC', 'Localization', 'Geolocation'],
    featured: true,
  },
  {
    id: '4',
    title: 'Anaya',
    description: 'Multi-role healthcare system with separate interfaces for Patient, Doctor, and Nurse roles and role-based navigation.',
    category: ['Professional', 'Healthcare'],
    stack: ['Flutter', 'Provider', 'Clean Architecture'],
    featured: false,
  },
  {
    id: '5',
    title: 'KidCart',
    description: 'Cross-platform e-commerce application with responsive UI and real-time Firebase integration.',
    category: ['Professional', 'E-commerce'],
    stack: ['Flutter', 'BLoC', 'Firebase'],
    featured: false,
  },
  {
    id: '6',
    title: 'Umbrella',
    description: 'Multi-vendor marketplace with complete e-commerce flow, payment integration, and advanced caching strategies.',
    category: ['Professional', 'E-commerce'],
    stack: ['Flutter', 'Provider', 'Repository Pattern', 'Firebase'],
    featured: false,
  },
  {
    id: '7',
    title: 'Home Healers',
    description: 'Telemedicine platform with real-time audio/video chat, appointment booking, and medical records handling.',
    category: ['Professional', 'Healthcare', 'Real-time'],
    stack: ['Flutter', 'BLoC', 'GetIt', 'Firebase'],
    featured: false,
  },
  {
    id: '8',
    title: 'BAS Platform',
    description: 'Full platform rebuild with Flutter Web admin dashboard and real-time Socket.IO communication layer.',
    category: ['Professional', 'Real-time'],
    stack: ['Flutter', 'Flutter Web', 'Socket.IO'],
    featured: false,
  },
  {
    id: '9',
    title: 'Pedometer System',
    description: 'Activity tracking application with background sync and periodic server synchronization.',
    category: ['Professional'],
    stack: ['Flutter', 'Background Tasks', 'REST API'],
    featured: false,
  },
  {
    id: '10',
    title: 'Books House',
    description: 'Digital bookstore with custom in-app EPUB/HTML reader and cache-first synchronization logic.',
    category: ['Side Projects'],
    stack: ['Flutter', 'MVVM', 'Riverpod'],
    featured: false,
  },
  {
    id: '11',
    title: 'Suits App',
    description: 'E-commerce application with strict clean architecture boundaries and modular design.',
    category: ['Side Projects', 'E-commerce'],
    stack: ['Flutter', 'Cubit', 'Clean Architecture'],
    featured: false,
  },
  {
    id: '12',
    title: 'Fix Infinity',
    description: 'Service-based app with real-time communication via Pusher and advanced state management.',
    category: ['Side Projects', 'Real-time'],
    stack: ['Flutter', 'BLoC', 'Pusher'],
    featured: false,
  },
];
