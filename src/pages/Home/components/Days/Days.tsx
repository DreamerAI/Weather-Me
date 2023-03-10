import React, { useState } from 'react'
import { WeeklyForecast, WeeklyForecastItem } from '../../../../store/types/types';
import Card from './Card';

import s from './Days.module.scss'
import Tabs from './Tabs';

type ForecastProps = {
    forecast: WeeklyForecast | null;
}


export interface Day {
    day_name: string;
    day_date: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

const Days = ({ forecast }: ForecastProps) => {

    console.log(forecast);

    const days: Day[] = [
        {
            day_name: 'Сегодня',
            day_date: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day_name: 'Завтра',
            day_date: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'небольшой дождь и солнце',
        },
        {
            day_name: 'Ср',
            day_date: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'небольшой дождь',
        },
        {
            day_name: 'Чт',
            day_date: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day_name: 'Пт',
            day_date: '28 авг',
            icon_id: 'rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day_name: 'Сб',
            day_date: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day_name: 'Вс',
            day_date: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
    ];

    return (
        <div className={s.days__container}>
            <Tabs />
            <div className={s.days}>
                {forecast?.list
                    .map((day: WeeklyForecastItem, index) => (
                        <Card day={day} key={index} />
                    ))}
            </div>
        </div>
    )
}

export default Days