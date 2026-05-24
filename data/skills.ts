export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Core Languages & Frameworks',
    skills: ['Dart', 'Flutter', 'SQL', 'JSON', 'Regex'],
  },
  {
    name: 'State Management & Architecture',
    skills: ['BLoC', 'Cubit', 'Provider', 'Riverpod', 'MVC', 'MVVM', 'Clean Architecture', 'Repository Pattern'],
  },
  {
    name: 'Backend, Services & Tools',
    skills: ['Firebase', 'REST API', 'Socket.IO', 'Pusher', 'Google Maps SDK', 'Push Notifications', 'Analytics', 'Crashlytics'],
  },
  {
    name: 'Dev Tools & Design',
    skills: ['Git', 'GitHub', 'Figma', 'Zeplin', 'Adobe XD', 'Google Analytics', 'AppsFlyer'],
  },
  {
    name: 'Extras',
    skills: ['Localization (AR/EN)', 'Android', 'iOS', 'Flutter Web'],
  },
];

export const allSkills = skillGroups.flatMap(g => g.skills);
