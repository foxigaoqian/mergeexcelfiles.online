
export interface FileMetadata {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  sheetCount?: number;
}

export interface MergedResult {
  blob: Blob;
  fileName: string;
  rowCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export enum Page {
  Home = 'home',
  Blog = 'blog',
  BlogPost = 'blog-post',
  Privacy = 'privacy',
  Terms = 'terms',
  Contact = 'contact'
}
