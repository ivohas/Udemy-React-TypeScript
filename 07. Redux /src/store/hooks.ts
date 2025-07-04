import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";


type DispatchFunction = () => AppDispatch;

export const useCartDisptch : DispatchFunction = useDispatch;

export const useCartSelector : TypedUseSelectorHook<RootState> = useSelector;