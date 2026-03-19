
export interface Episode {
  id: number;
  title: string;
  date: string;
  link: string;
  thumbnail: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
