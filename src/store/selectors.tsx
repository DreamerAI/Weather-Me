import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReducer
export const selectWeeklyForecastData = (state: RootState) => state.weeklyWeatherSliceReducer