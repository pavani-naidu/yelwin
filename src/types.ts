export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'digital-products' | 'ai-automation' | 'brand-design' | 'digital-growth';
  description: string;
  services: string[];
  cta: string;
  fullDetails?: {
    overview: string;
    capabilities: string[];
    deliverables: string[];
    typicalTimeline: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  description: string;
  fullStory: {
    challenge: string;
    solution: string;
    technologies: string[];
    results: { label: string; value: string }[];
  };
  services: string[];
  imageUrl: string;
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: 'AI' | 'Technology' | 'Startups' | 'Design' | 'Branding' | 'Digital Growth';
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & ML' | 'Mobile & SaaS' | 'Infrastructure';
  description: string;
}

export interface CompanyMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  servicesNeeded: string[];
  budgetRange: string;
  timeline: string;
  projectDetails: string;
  honeypot?: string; // Spam protection
}
