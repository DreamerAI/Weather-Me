import React, { useState } from 'react'
import { GetWeatherIcon } from '../../../../assets/icons/global/GlobalSvgSelector'
import { getLocalDate, getWeekday } from '../../../../helpers/getLocalDate'
import Popup from '../../../../shared/Popup/Popup'
import { WeeklyForecastItem } from '../../../../store/types/types'


import s from './Days.module.scss'
import { useTranslation } from 'react-i18next'

type Props = {
    day: WeeklyForecastItem
}


const Card = ({ day }: Props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { t, i18n } = useTranslation();

    let maxTemperature = Math.ceil(day.main.temp_max);
    let minTemperature = Math.ceil(day.main.temp_min);
    let weekday = getWeekday(day.dt, i18n.language).toUpperCase();
    let localdate = getLocalDate(day.dt, i18n.language);

    function handleOpen() {
        setIsPopupOpen(true);
    }
    function handleClose(event: React.MouseEvent<HTMLDivElement>) {
        setIsPopupOpen(false);
        event.stopPropagation();
    }


    return (
        <>
            {isPopupOpen && <Popup handleClose={handleClose} day={day} />}
            <div className={s.card} onClick={handleOpen}>

                <div className={s.card__header} >
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
        </>
    )
}



export default Card