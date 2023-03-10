import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather, WeeklyForecast } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`)
    }
}

export class ForecastService {
    static getForecast(city: string): Promise<AxiosResponse<WeeklyForecast>> {
        return api.get<WeeklyForecast>(`/forecast/?q=${city}`)
    }
}