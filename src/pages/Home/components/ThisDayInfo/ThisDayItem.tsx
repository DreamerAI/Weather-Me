import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicator/IndicatorSvgSelector'
import s from './ThisDayInfo.module.scss'
import { Item } from './ThisDayInfo'

type Props = {
    item: Item
}

const ThisDayItem = ({ item }: Props) => {
    const { icon_id, name, value } = item

    return (
        <div className={s.item}>
            <div className={s.indicator__icon}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    )
}

export default ThisDayItem