export interface HobbyItem {
  id: string;
  title: string;
  category: 'Tech' | 'Creative' | 'Makers' | 'Gaming' | 'Life';
  icon: string;
  description: string;
  howICanHelp: string;
  tags: string[];
  status: 'Actively Exploring' | 'Always Practicing' | 'Current Obsession';
}

export interface VisitorNote {
  id: string;
  name: string;
  message: string;
  emoji: string;
  timestamp: string;
}
