import { GetWeatherIcon } from '../../../../assets/icons/global/GlobalSvgSelector'
import { getLocalTime } from '../../../../helpers/getLocalTime'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'
import { useTranslation } from 'react-i18next'

type WeatherProps = {
    weather: Weather;
}

const ThisDay = ({ weather }: WeatherProps) => {

    const { t } = useTranslation();

    let localTime = getLocalTime(weather.timezone)
    const temperature = Math.ceil(weather.main.temp);

    return (
        <div className={s.this__day}>
            <div className={s.this__day__temperature}>
                <div className={s.this__day__degree}>{temperature}°</div>
                <div className={s.this__day__icon}><GetWeatherIcon weatherCode={weather.weather[0].icon} /></div>
            </div>
            <div className={s.this__day__today}>{t('today')}</div>
            <div className={s.this__day__date}>
                <div className={s.this__day__time}>{t('localTime')}: <span>{localTime}</span></div>
                <div className={s.this__day__city}>{t('city')}: <span>{weather.name}</span></div>
            </div>
        </div>
    )
}

export default ThisDay