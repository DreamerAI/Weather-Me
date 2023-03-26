export function getLocalDate(dateNumber: any) {
    const dtFormat = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'UTC',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

    return dtFormat.format(new Date(dateNumber * 1e3));
}

export function getWeekday(dateNumber: any) {
    const dtFormat = new Intl.DateTimeFormat('ru-RU', {
        timeZone: 'UTC',
        weekday: 'short'
    });

    return dtFormat.format(new Date(dateNumber * 1e3));
}