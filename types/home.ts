export interface FeaturedProject {
  title: string;
  description: string;
  imagePlaceholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  technologies: string[];
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
