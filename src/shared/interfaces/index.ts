import { INews } from '../../entities/news/model/types.ts';
import { CategoryType } from '../../entities/category';


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




export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';
