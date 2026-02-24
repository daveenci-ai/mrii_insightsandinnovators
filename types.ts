
export interface Episode {
  id: string;
  number: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  topic: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
