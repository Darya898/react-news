import { CategoryType } from '../../category';

export interface INews {
  author: string;
  category: CategoryType[];
  description: string;
  id: NewsId;
  image: string;
  language: string;
  published: string;
  title: string;
  url: UrlType;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
type UrlType = string;
type NewsId = string;