import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import { database } from '../services/database';
import { Q } from '@nozbe/watermelondb';

export default class CityForecastModel extends Model {
  static table = 'city_forecast';
  private readonly cityForecastDb = database.collections.get('city_forecast')

  @field('data') data: any;
  @field('city_id') city_id: any;

  async saveCityForecast(id: number, cityStringified: string) {

    // Função que salva forecast no banco
    await database.write(async () => {
      //IMPORTANTE: Todas as funções de alteração tem que estar dentro essa função de "write"
      const storageCity = await this.cityForecastDb.query(Q.where('city_id', Number(id))).fetch()
      // Se já existir a localidade salva ele ignora salvar ela novamente
      // Se estiver online sempre consultar o valor novo e atualizar o forecast data no banco
      if (storageCity.length > 0) {
        // Se ja existir ele apenas atualiza o valor, mas não cria um novo
        await storageCity[0].update((city: any) => {
          city.data = cityStringified
        }).catch(err => console.log(err))
      } else {
        await this.cityForecastDb.create((city: any) => {
          city.data = cityStringified
          city.city_id = Number(id)
        }).catch(err => console.log(err))
      }

    })
  }

  async getCityById(cityId: string, id?: string): Promise<Object> {
    return await this.cityForecastDb.query(Q.where('city_id', Number(id))).fetch()
  }

  async getAll(): Promise<Object> {
    return await this.cityForecastDb.query().fetch()
  }
}