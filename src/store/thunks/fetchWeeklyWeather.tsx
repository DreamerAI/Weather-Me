import { ForecastService } from "../../services/weatherService";
import { weeklyWeatherSlice } from "../slices/weeklyWeatherSlice";
import { AppDispatch } from "../store";

export const fetchWeeklyWeather =
    (payload: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeather())
            const res = await ForecastService.getForecast(payload);

            if (res.status === 200) {
                dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeatherSuccess(res))
            } else {
                dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeatherError(res))
            }
        } catch (error) {
            console.log(error);

        }


    }