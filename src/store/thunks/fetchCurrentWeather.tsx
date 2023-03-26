import { WeatherService } from "../../services/weatherService";
import { showToastSuccess, showToastError } from "../../utils/getToastMessage";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
    (payload: string) => async (dispatch: AppDispatch) => {

        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
            const res = await WeatherService.getCurrentWeather(payload);
            showToastSuccess('Успешно')
            if (res.status === 200) {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
            } else {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
            }
        } catch (error) {
            showToastError('Провал')
            console.log(error);

        }


    }