import { Theme } from "../context/ThemeContext";

export function getSelectTheme(state: any, theme: string) {

    if (theme === Theme.LIGHT) {
        return (
            state.isDisabled ? undefined : state.isSelected ? '#4793FF' : state.isFocused ? 'rgb(119, 176, 255, 0.3)' : undefined
        )
    }

    if (theme === Theme.DARK) {
        return (
            state.isDisabled ? undefined : state.isSelected ? '#0171C2' : state.isFocused ? '#2F4765' : '#131E2A'
        )
    }

}