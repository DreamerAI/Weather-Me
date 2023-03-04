import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'

import s from './Days.module.scss'

type Props = {
    day: Day
}


const Card = ({ day }: Props) => {

    const { day_name, day_date, icon_id, temp_day, temp_night, info } = day

    return (
        <div className={s.card}>
            <div className={s.card__header}>
                <div className={s.day}>{day_name}</div>
                <div className={s.day__info}>{day_date}</div>
            </div>
            <div className={s.card__main}>

                <div className={s.day__icon}>
                    <GlobalSvgSelector id={icon_id} />
                </div>
                <div className={s.info_degree}>
                    <div className={s.day__temp_day}>{temp_day}</div>
                    <div className={s.day__temp_night}>{temp_night}</div>
                </div>
            </div>

        </div>
    )
}



export default Card