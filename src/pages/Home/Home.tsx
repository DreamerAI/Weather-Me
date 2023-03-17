import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { selectCurrentWeatherData, selectWeeklyForecastData } from '../../store/selectors'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { fetchWeeklyWeather } from '../../store/thunks/fetchWeeklyWeather'
import Days from './components/Days/Days'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'

import s from './Home.module.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../../hooks/useTheme'

type Props = {
    selectCity: string
}

export const Home = (props: Props) => {

    const dispatch = useCustomDispatch();
    const { weather } = useCustomSelector(selectCurrentWeatherData)
    const { forecast } = useCustomSelector(selectWeeklyForecastData)

    const theme = useTheme();


    useEffect(() => {
        dispatch(fetchCurrentWeather(props.selectCity))
        dispatch(fetchWeeklyWeather(props.selectCity))
    }, [props.selectCity])


    return (
        <div className={s.home}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme={theme.theme}
            />
            <div className={s.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo weatherInfo={weather} />
            </div>
            <Days forecast={forecast} />
        </div>
    )
}