import React from 'react'
import { GetWeatherIcon } from '../../../../assets/icons/global/GlobalSvgSelector'
import { getLocalDate, getWeekday } from '../../../../helpers/getLocalDate'
import { WeeklyForecastItem } from '../../../../store/types/types'


import s from './Days.module.scss'

type Props = {
    day: WeeklyForecastItem
}


const Card = ({ day }: Props) => {

    let maxTemperature = Math.ceil(day.main.temp_max)
    let minTemperature = Math.ceil(day.main.temp_min)
    let weekday = getWeekday(day.dt).toUpperCase()
    let localdate = getLocalDate(day.dt)

    return (
        <div className={s.card}>
            <div className={s.card__header}>
                <div className={s.day}>{weekday}</div>
                <div className={s.day__info}>{localdate}</div> {/* dt */}
            </div>
            <div className={s.card__main}>

                <div className={s.day__icon}>
                    <GetWeatherIcon weatherCode={day.weather[0].icon} />
                </div>
                <div className={s.info_degree}>
                    <div className={s.day__temp_day}><span>Max:</span> {maxTemperature}</div>
                    <div className={s.day__temp_night}><span>Min:</span> {minTemperature}</div>
                </div>
            </div>

        </div>
    )
}



export default Card