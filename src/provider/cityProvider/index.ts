import {City} from '../../model/city/City';
import axios from 'axios';
import {CLIMATEMPO_TOKEN} from '@env';

const token = CLIMATEMPO_TOKEN;
export class CityProvider {
    async getCity(city: string): Promise<City[]> {
        const resp = await axios.get<City[]>(
            `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${city}&token=${token}`,
        );
        if (resp.data === null) {
            return [];
        }
        return resp.data.splice(0, 10);
    }
}
