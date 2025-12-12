export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  span?: boolean; // If true, takes up 2 columns in grid
}

export interface PageData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  gallery: GalleryItem[];
  themeColor: string;
}

export type PageId =
  | 'personal-bio'
  | 'career-bio'
  | 'taekwondo'
  | 'arts'
  | 'paintings'
  | 'sculptures'
  | 'digital-3d'
  | 'fitness'
  | 'contact';

export interface NavItem {
  label: string;
  path: string;
  id: PageId;
}