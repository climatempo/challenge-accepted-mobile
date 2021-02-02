interface ForecastResponseData {
    date_br: string;
    humidity: {
        min: number;
        max: number;
    };
    rain: {
        precipitation: number;
    };
    wind: {
        velocity_avg: number;
    };
    text_icon: {
        text: {
            phrase: {
                reduced: string;
            };
        };
    };
    temperature: {
        min: number;
        max: number;
    };
}
export interface ForecastResponse {
    id: number;
    name: string;
    state: string;
    data: Array<ForecastResponseData>;
}
