import { WeatherService } from "../../services/weatherService";
import { showToastSuccess, showToastError } from "../../utils/getToastMessage";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
    (payload: string, successMessage: string, errorMessage: string) => async (dispatch: AppDispatch) => {

        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
            const res = await WeatherService.getCurrentWeather(payload);
            if (res.status === 200) {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
                showToastSuccess(successMessage)
            } else {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
            }
        } catch (error) {
            showToastError(errorMessage)
            console.log(error);

        }
    }
