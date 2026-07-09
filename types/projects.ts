export interface PortfolioProject {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  imagePlaceholderLabel: string;
  featured: boolean;
}

export interface FeaturedProjectCaseStudy {
  id: string;
  shortLabel: string;
  title: string;
  whatItWas: string;
  whyItWasBuilt: string;
  responsibilities: string[];
  engineeringChallenges: string[];
  keyAccomplishments: string[];
  technologies: string[];
  imagePlaceholderLabel: string;
}

export interface StarsProject {
  id: string;
  shortLabel: string;
  title: string;
  summary: string;
  technologies: string[];
  imagePlaceholderLabel: string;
}
