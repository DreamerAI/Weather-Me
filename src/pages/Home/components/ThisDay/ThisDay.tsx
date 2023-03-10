import React from 'react'
import { GetWeatherIcon } from '../../../../assets/icons/global/GlobalSvgSelector'
import { getLocalTime } from '../../../../helpers/getLocalTime'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'

type WeatherProps = {
    weather: Weather;
}

const ThisDay = ({ weather }: WeatherProps) => {

    let localTime = getLocalTime(weather.timezone)
    const temperature = Math.ceil(weather.main.temp);

    console.log(weather);


    return (
        <div className={s.this__day}>
            <div className={s.this__day__temperature}>
                <div className={s.this__day__degree}>{temperature}°</div>
                <div className={s.this__day__icon}><GetWeatherIcon weatherCode={weather.weather[0].icon} /></div>
            </div>
            <div className={s.this__day__today}>Сегодня</div>
            <div className={s.this__day__date}>
                <div className={s.this__day__time}>Время: <span>{localTime}</span></div>
                <div className={s.this__day__city}>Город: <span>{weather.name}</span></div>
            </div>
        </div>
    )
}

export default ThisDay