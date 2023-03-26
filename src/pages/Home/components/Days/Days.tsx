import React, { useState } from 'react'
import { WeeklyForecast, WeeklyForecastItem } from '../../../../store/types/types';
import Card from './Card';

import s from './Days.module.scss'

type ForecastProps = {
    forecast: WeeklyForecast | null;
}



const Days = ({ forecast }: ForecastProps) => {

    const [visibleItems, setVisibleItems] = useState(7);

    console.log(forecast);

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 7);
    };

    return (
        <div className={s.days__container}>
            <div className={s.days}>
                {forecast?.list.slice(0, visibleItems)
                    .map((day: WeeklyForecastItem, index) => (
                        <Card day={day} key={index} />
                    ))}
            </div>
            {forecast?.list.length ? visibleItems < forecast?.list.length && (
                <div className={s.days__loadmore}>
                    <button className={s.button} onClick={handleLoadMore}>Еще</button>
                </div>
            ) : null}

        </div>
    )
}

export default Days