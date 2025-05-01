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

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}
export type ParamsType = Partial<IFilters>;
export interface IBanner extends INews {
  bannerID: string;
}

export type ItemType = INews & IBanner;
export type CategoryType = string;
type UrlType = string;
type NewsId = string;

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
export interface CategoriesApiResponse {
  categories: CategoryType[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  totalPages: number;
}
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
