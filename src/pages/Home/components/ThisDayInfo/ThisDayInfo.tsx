import React from 'react'
import { Weather } from '../../../../store/types/types'
import s from './ThisDayInfo.module.scss'
import ThisDayItem from './ThisDayItem'

interface weatherInfoProps {
    weatherInfo: Weather
}

export interface Item {
    icon_id: string,
    name: string,
    value: string,
}

const ThisDayInfo = ({ weatherInfo }: weatherInfoProps) => {

    const temperature = Math.round(weatherInfo.main.temp)
    const feelTemperaturee = Math.round(weatherInfo.main.feels_like)

    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: `${temperature}° - ощущается как ${feelTemperaturee}°`,

    }, {
        icon_id: 'pressure',
        name: 'Давление ',
        value: `${weatherInfo.main.pressure} мм ртутного столба`,

    }, {
        icon_id: 'rainfall',
        name: 'Влажность',
        value: `составляет ${weatherInfo.main.humidity} %`,

    }, {
        icon_id: 'wind',
        name: 'Ветер',
        value: `${weatherInfo.wind.speed} м/с юго-запад`,

    },
    ]

    return (
        <div className={s.this__day__info}>
            {items.map((item: Item) => (
                <ThisDayItem item={item} key={item.icon_id} />
            ))}
        </div>
    )
}

export default ThisDayInfo