import {forecastApi, localeApi} from '../climaTempoApi';

export async function getForecast(id: string, token: string){
 return forecastApi.get(`/${id}/days/15?token=${token}`)
}

export async function getCity(cityName: string, token: string){  
 return localeApi.get(`/city?name=${cityName}&country=BR&token=${token}`)
}

export async function getCityWithState(cityName: string, cityState: string, token: string){  
  return localeApi.get(`/city?name=${cityName}&state=${cityState}&token=${token}`)
 }