export interface Article {
  author: null | string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface NewsData {
  pagination: Pagination;
  data: Article[];
}
