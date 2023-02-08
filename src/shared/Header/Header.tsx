import React from 'react'
import Select from 'react-select'

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'

import s from './Header.module.scss'

type Props = {}

export const Header = (props: Props) => {

    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Санкт-Петербург' },
        { value: 'city-3', label: 'Новгород' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgb(119, 176, 255, 0.2)',
            width: '194px',
            height: '39px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
                <div className={s.title}>Weather ME</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id='change-theme' /></div>
                <Select defaultValue={options[0]} className={s.select} options={options} styles={colourStyles} />
            </div>
        </header>
    )
}