import { ImageAsset } from './assets/image';

/** A named piece of work listed inside a role — only the career page renders these. */
export interface RoleProject {
  name: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: ImageAsset;
  title: string;
  description?: string;
  span?: boolean; // If true, takes up 2 columns in grid
  tags?: string[]; // Optional tech stack tags
  subtitle?: string; // Optional subtitle (like dates)
  projects?: RoleProject[]; // Optional project list under a role
}

export interface PageData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: ImageAsset;
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
  | 'side-projects'
  | 'contact';

export interface NavItem {
  label: string;
  path: string;
  id: PageId;
}