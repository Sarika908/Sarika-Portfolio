export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  location: string;
  description: string;
  stats: Stat[];
  highlights: string[];
  tags: string[];
  type: 'backend' | 'ai' | 'fullstack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  cgpa: string;
  period: string;
  location: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  desc: string;
  tags: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  highlights: string[];
}
