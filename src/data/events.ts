export interface Event {
  id: string
  title: string
  tag: string
  date: string
  description: string
  image: string
}

// Replace `image` paths with real photos placed in /public/events/
// Replace title, date and description with real event data.
export const events: Event[] = [
  {
    id: 'event-01',
    title: 'GDC Game Jam — Winter Cycle',
    tag: 'Game Jam',
    date: 'Coming Soon',
    description:
      '48 hours, one theme, zero sleep. Teams build a playable game from scratch and demo it live.',
    image: '/events/game-jam.jpg',
  },
  {
    id: 'event-02',
    title: 'Unity Foundations Workshop',
    tag: 'Workshop',
    date: 'Coming Soon',
    description:
      'Hands-on session covering scenes, physics, and your first playable build in one sitting.',
    image: '/events/workshop-unity.jpg',
  },
  {
    id: 'event-03',
    title: 'Shader Lab: Intro to Fragment Shaders',
    tag: 'Workshop',
    date: 'Coming Soon',
    description:
      'Write your first fragment shaders and understand why the GPU thinks in pixels, not objects.',
    image: '/events/workshop-shaders.jpg',
  },
  {
    id: 'event-04',
    title: 'Inter-College Game Design Challenge',
    tag: 'Competition',
    date: 'Coming Soon',
    description:
      'GDC teams compete against other college clubs on a shared design brief, judged live.',
    image: '/events/competition.jpg',
  },
  {
    id: 'event-05',
    title: 'Arcade Night',
    tag: 'Community',
    date: 'Coming Soon',
    description:
      'Playtesting, couch co-op, and unfiltered feedback on whatever the club is building this month.',
    image: '/events/arcade-night.jpg',
  },
]
