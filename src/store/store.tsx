import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import weeklyWeatherSliceReducer from "./slices/weeklyWeatherSlice";

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    weeklyWeatherSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']