import React, { useState } from 'react'
import { WeeklyForecast, WeeklyForecastItem } from '../../../../store/types/types';
import Card from './Card';

import s from './Days.module.scss'
import Tabs from './Tabs';

type ForecastProps = {
    forecast: WeeklyForecast | null;
}



const Days = ({ forecast }: ForecastProps) => {

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