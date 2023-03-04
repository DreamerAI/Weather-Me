import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'accent-background',
        'box-shadow',
        'box-shadowIcon',
        'hr-color',
        // Fonts
        'font-primary',
        'font-secondary',
        'font-accent',
        'font-cancel',
    ];

    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })
}