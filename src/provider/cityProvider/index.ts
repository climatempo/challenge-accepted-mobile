import {City} from '../../model/city/City';
import axios from 'axios';

const token = '0f8eb132cad772d27535111ee3826c20';
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
