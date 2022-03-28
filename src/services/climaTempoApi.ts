import axios from 'axios';

export const forecastApi = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api/v1/forecast/locale"
})

export const localeApi = axios.create({
  baseURL: "http://apiadvisor.climatempo.com.br/api/v1/locale"
})