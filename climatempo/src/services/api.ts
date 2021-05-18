
import axios from 'axios';
import keys from '../configs/env';

const api = {
  locale: axios.create({
    baseURL: `http://apiadvisor.climatempo.com.br/api/v1/locale`,
    params: {
      token: keys.climatempo,
    },
  }),
  manager: axios.create({
    baseURL: `http://apiadvisor.climatempo.com.br/api-manager/user-token/${keys.climatempo}/locales`,
  }),
  forecast: axios.create({
    baseURL: `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale`,
    params: {
      token: keys.climatempo,
    },
  })
}

export default api;
