import axios from 'axios'
import Config from 'react-native-config'

const axiosInstance = axios.create({
  baseURL: Config.API_ADVISOR
})

export async function getForecast(id: string, token: string) {
  return axiosInstance.get(`/forecast/locale/${id}/days/15?token=${token}`)
}

export async function getCity(cityName: string, token: string) {
  return axiosInstance.get(`/locale/city?name=${cityName}&country=BR&token=${token}`)
}

export async function getCityWithState(cityName: string, cityState: string, token: string) {
  return axiosInstance.get(`/locale/city?name=${cityName}&state=${cityState}&troken=${token}`)
}