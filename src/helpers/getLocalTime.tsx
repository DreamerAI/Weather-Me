import moment from "moment-timezone";

export function getLocalTime(timezone: number) {

    const cityTimeZone = timezone / 3600;

    const now = moment.utc().utcOffset(cityTimeZone)

    const hours = now.hour();
    const minutes = now.minute().toString().padStart(2, '0');;

    return `${hours}:${minutes}`;
}