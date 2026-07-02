export interface DonationCampaign {
  id: string;
  title: string;
  category: string;
  daysLeft: number;
  raised: number;
  goal: number;
  image: string;
}

export interface CampingProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  briefUrl?: string;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  category: string;
  image: string;
}

export interface EconestEvent {
  id: string;
  title: string;
  dateRange: string;
  daysLabel: string;
  timeRange: string;
  location: string;
  joinedCount: number;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  dateDay: string;
  dateMonth: string;
  dateLabel: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
  gallery?: string[];
  briefUrl?: string;
  tags?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
