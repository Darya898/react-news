import {configureStore} from "@reduxjs/toolkit";

import {newsApi} from "../entities/news/api/newsApi.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {rootReducer} from "./appReducer.ts";
import { categoriesApi } from '../entities/category/api/categoriesApi.ts';

export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware).concat(categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;