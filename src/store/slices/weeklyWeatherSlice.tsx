import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WeeklyForecast } from '../types/types';
import { AxiosResponse } from 'axios'


type WeeklyForecastState = {
    forecast: WeeklyForwecast | null,
    isLoading: boolean,
    response: Response;
}

type Response = {
    status: number,
    message: string,
}

const initialState: WeeklyForecastState = {
    forecast: null,
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}


export const weeklyWeatherSlice = createSlice({
    name: 'weekly_weather',
    initialState,
    reducers: {
        fetchWeeklyWeather(state) {
            state.isLoading = true;
        },
        fetchWeeklyWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeeklyForecast>>) {
            state.forecast = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
        fetchWeeklyWeatherError(state, action: PayloadAction<AxiosResponse<WeeklyForecast>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        },
    },
});

export default weeklyWeatherSlice.reducer;