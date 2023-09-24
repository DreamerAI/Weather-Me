function formatDate(dateNumber: any, options: Intl.DateTimeFormatOptions, language: string) {
    const dtFormat = new Intl.DateTimeFormat(language, {
        timeZone: 'UTC',
        ...options
    });

    return dtFormat.format(new Date(dateNumber * 1e3));
}

export function getLocalDate(dateNumber: any, language: string) {
    return formatDate(dateNumber, {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }, language);
}

export function getWeekday(dateNumber: any, language: string) {
    return formatDate(dateNumber, {
        weekday: 'short'
    }, language);
}

export function getWeekdayLong(dateNumber: any, language: string) {
    return formatDate(dateNumber, {
        weekday: 'long'
    }, language);
}
