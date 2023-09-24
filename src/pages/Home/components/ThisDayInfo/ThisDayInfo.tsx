import { useTranslation } from 'react-i18next'
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

    const { t } = useTranslation();

    const temperature = Math.round(weatherInfo.main.temp)
    const feelTemperaturee = Math.round(weatherInfo.main.feels_like)

    const items = [{
        icon_id: 'temp',
        name: `${t("temperatue")}`,
        value: `${temperature}° - ${t("temperatueDesc")} ${feelTemperaturee}°`,

    }, {
        icon_id: 'pressure',
        name: `${t("pressure")}`,
        value: `${weatherInfo.main.pressure} ${t("pressureDesc")}`,

    }, {
        icon_id: 'rainfall',
        name: `${t("humidity")}`,
        value: `${t("humidityDesc")} ${weatherInfo.main.humidity} %`,

    }, {
        icon_id: 'wind',
        name: `${t("wind")}`,
        value: `${weatherInfo.wind.speed} ${t("windDesc")}`,

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