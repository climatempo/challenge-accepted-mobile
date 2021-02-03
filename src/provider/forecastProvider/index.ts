import {Forecast} from '../../model/forecast/Forecast';
import axios from 'axios';
import {ForecastResponse} from '../../model/forecast/ForecastResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CLIMATEMPO_TOKEN} from '@env';

const token = CLIMATEMPO_TOKEN;
export class ForecastProvider {
    async getForecast(id: number): Promise<Forecast> {
        const resp = await axios.get<ForecastResponse>(
            `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${id}/days/15?token=${token}`,
        );
        if (resp.data === null) {
            return {city: '', items: []};
        }
        return {
            city: `${resp.data.name} - ${resp.data.state}`,
            items: resp.data.data.map((value) => ({
                date: value.date_br,
                temperatureMax: value.temperature.max,
                temperatureMin: value.temperature.min,
                rain: value.rain.precipitation,
                text: value.text_icon.text.phrase.reduced,
                windVelocity: value.wind.velocity_avg,
                humidity: (value.humidity.max + value.humidity.min) / 2,
            })),
        };
    }

    async loadFromLocalStorage(): Promise<Forecast> {
        const json = await AsyncStorage.getItem('forecastItemkey');
        if (json === null) {
            return {city: '', items: []};
        }
        const parsedJon = JSON.parse(json);
        return parsedJon as Forecast;
    }

    async setForecastOnLocalStorage(item: Forecast): Promise<void> {
        await AsyncStorage.setItem('forecastItemkey', JSON.stringify(item));
    }
}
