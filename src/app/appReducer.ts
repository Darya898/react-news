import {combineReducers} from "@reduxjs/toolkit";
import newsReducer from "../entities/news/model/NewsSlice.ts";
import {newsApi} from "../entities/news/api/newsApi.ts";
import { categoriesApi } from '../entities/category/api/categoriesApi.ts';

export const rootReducer=combineReducers({
  news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
})