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

    weather: {
        icon: string
    }[]
}

// Weekly weather types


export type WeeklyForecast = {
    city: {
        name: string;
    };
    cnt: number;
    list: WeeklyForecastItem[];
};


export type WeeklyForecastItem = {
    dt: number;
    main: {
        temp_min: number;
        temp_max: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    }

    wind: {
        speed: number;
    }
    weather: {
        icon: string
    }[]

};