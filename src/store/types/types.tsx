export type Weather = {
    main: {
        temp: number
        humidity: number
        pressure: number
        feels_like: number
    }
    wind: {
        speed: number;
    }
    name: string;
    timezone: number;
}