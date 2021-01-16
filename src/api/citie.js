import axios from 'axios';
import { TOKEN } from '../utils/constants';

export const getCitie = async (citie) => {
  try {
    const result = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${citie}&token=${TOKEN}`);
    if (result){
      return result
    }
  } catch (error) {
    console.log(error);
  }
} 