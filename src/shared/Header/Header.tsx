import React from 'react'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'

import s from './Header.module.scss'
import { Theme } from '../../context/ThemeContext'
import { getSelectTheme } from '../../helpers/getSelectTheme'

type Props = {}

export const Header = (props: Props) => {

    const theme = useTheme();

    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Санкт-Петербург' },
        { value: 'city-3', label: 'Новгород' }
    ]



    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#172331' : 'rgb(119, 176, 255, 0.2)',
            width: '194px',
            height: '39px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#77B0FF' : '#333333'
        }),
        option: (styles: any, state: any) => ({
            ...styles,
            backgroundColor: getSelectTheme(state, theme.theme),
            color: theme.theme === Theme.DARK ? '#77B0FF' : '#333333',
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo} ><GlobalSvgSelector id='header-logo' /></div>
                <div className={s.title}>Weather ME</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.theme__icon} onClick={changeTheme}><GlobalSvgSelector id='change-theme' theme={theme.theme} /></div>
                <Select defaultValue={options[0]} className={s.select} options={options} styles={colourStyles} />
            </div>
        </header>
    )
}