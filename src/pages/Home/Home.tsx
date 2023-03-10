import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { selectCurrentWeatherData, selectWeeklyForecastData } from '../../store/selectors'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { fetchWeeklyWeather } from '../../store/thunks/fetchWeeklyWeather'
import Days from './components/Days/Days'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'


export const Home = () => {

    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData)
    const { forecast } = useCustomSelector(selectWeeklyForecastData)



    useEffect(() => {
        dispatch(fetchCurrentWeather('Москва'))
        dispatch(fetchWeeklyWeather('Москва', 2))
    }, [])


    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo weatherInfo={weather} />
            </div>
            <Days forecast={forecast} />
        </div>
    )
}