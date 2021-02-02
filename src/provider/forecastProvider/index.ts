import {Forecast} from '../../model/forecast/Forecast';
import axios from 'axios';
import {ForecastResponse} from '../../model/forecast/ForecastResponse';

const token = '0f8eb132cad772d27535111ee3826c20';
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
}
