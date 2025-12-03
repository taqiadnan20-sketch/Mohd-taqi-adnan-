export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
}

export interface Skill {
  name: string;
  category: 'Professional' | 'Technical' | 'Language';
  level: number; // 0-100
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}