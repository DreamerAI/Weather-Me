import React, { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'

import s from './Header.module.scss'
import { Theme } from '../../context/ThemeContext'
import { showToastReminder } from '../../utils/getToastMessage'


export type Props = {
    selectCity: string;
    setSelectCity: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = (props: Props) => {

    const theme = useTheme();
    const [width, setWidth] = useState(window.innerWidth);
    const [inputValue, setInputValue] = useState<string>('');


    window.addEventListener('resize', () => setWidth(window.innerWidth));


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (/^[A-Za-zА-Яа-я\s-]+$/.test(inputValue)) {
            props.setSelectCity(inputValue)
        }
        else {
            showToastReminder('Неправильно введен город')
        }

    };

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo} ><GlobalSvgSelector id='header-logo' /></div>
                <div className={s.title}>Weather ME</div>
            </div>
            {width <= 640 ? <p className={s.select__label}> Выберите город</p> : null}
            <div className={s.wrapperInput}>
                <div className={s.theme__icon} onClick={changeTheme}><GlobalSvgSelector id='change-theme' theme={theme.theme} /></div>
                <input type="text" className={s.input} value={inputValue} onChange={handleInputChange} />
                <button className={s.button} onClick={handleButtonClick}> &#8594; </button>
            </div>
        </header>
    )
}