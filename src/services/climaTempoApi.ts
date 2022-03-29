import axios from 'axios';
import { API_ADVISOR } from '@env'

export const forecastApi = axios.create({
  baseURL: `${API_ADVISOR}/forecast/locale`
})

export const localeApi = axios.create({
  baseURL: `${API_ADVISOR}/locale`
})