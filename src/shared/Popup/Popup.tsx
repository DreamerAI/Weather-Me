import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { getWeekdayLong } from '../../helpers/getLocalDate';

import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { WeeklyForecastItem } from '../../store/types/types';
import s from './Popup.module.scss'
import { useTranslation } from 'react-i18next';

type Props = {
    day: WeeklyForecastItem,
    handleClose: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const Popup = ({ day, handleClose }: Props) => {

    const { t, i18n } = useTranslation();

    const temperature = Math.round(day.main.temp_max)
    const feelTemperaturee = Math.round(day.main.feels_like)
    let localDate = getWeekdayLong(day.dt, i18n.language)

    const items = [{
        icon_id: 'temp',
        name: `${t("temperatue")}`,
        value: `${temperature}° - ${t("temperatueDesc")} ${feelTemperaturee}°`,

    }, {
        icon_id: 'pressure',
        name: `${t("pressure")}`,
        value: `${day.main.pressure} ${t("pressureDesc")}`,

    }, {
        icon_id: 'rainfall',
        name: `${t("humidity")}`,
        value: `${t("humidityDesc")} ${day.main.humidity} %`,

    }, {
        icon_id: 'wind',
        name: `${t("wind")}`,
        value: `${day.wind.speed} ${t("windDesc")}`,

    },
    ]

    return (
        <>
            <div className={s.blur} onClick={handleClose}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>{temperature}°</div>
                    <div className={s.day__name}>{localDate}</div>

                </div>
                <div className={s.this__day_info_items}>
                    {items.map((item: Item) => (
                        <ThisDayItem key={item.icon_id} item={item} />
                    ))}
                </div>
                <div className={s.close} onClick={handleClose}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    )
}

export default Popup