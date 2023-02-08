import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.this__day__temperature}>
                <div className={s.this__day__degree}>20°</div>
                <div className={s.this__day__icon}><GlobalSvgSelector id='sun' /></div>
            </div>
            <div className={s.this__day__today}>Сегодня</div>
            <div className={s.this__day__date}>
                <div className={s.this__day__time}>Время: <span>21:54</span></div>
                <div className={s.this__day__city}>Город: <span>Москва</span></div>
            </div>
        </div>
    )
}

export default ThisDay