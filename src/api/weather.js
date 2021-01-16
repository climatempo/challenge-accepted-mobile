import axios from 'axios';
import { TOKEN } from '../utils/constants';

export const getWeathers = async (idCitie) => {
  try {
    const result = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${idCitie}/days/15?token=${TOKEN}`);
    if (result){
      return result
    }
  } catch (error) {
    console.log(error);
  }
} 