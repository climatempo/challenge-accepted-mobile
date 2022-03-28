import {forecastApi, localeApi} from '../climaTempoApi';

export async function getForecast(id: string, token: string){
 return forecastApi.get(`/${id}/days/15?token=${token}`)
}

export async function getCityId(cityName: string, stateName: string, token: string){  
 return localeApi.get(`/city?name=${cityName}&state=${stateName}&country=BR&token=${token}`)
}