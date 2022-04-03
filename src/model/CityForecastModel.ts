import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';
import {database} from '../services/database';
import {Q} from '@nozbe/watermelondb';

export default class CityForecastModel extends Model {
  static table = 'city_forecast';
  private readonly cityForecastDb = database.collections.get('city_forecast');

  @field('data') data: any;
  @field('city_id') city_id: any;

  async saveCityForecast(id: number, cityStringified: string) {
    await database.write(async () => {
      const storageCity = await this.cityForecastDb
        .query(Q.where('city_id', Number(id)))
        .fetch();
      if (storageCity.length > 0) {
        await storageCity[0]
          .update((city: any) => {
            city.data = cityStringified;
          })
          .catch(err => console.log(err));
      } else {
        await this.cityForecastDb
          .create((city: any) => {
            city.data = cityStringified;
            city.city_id = Number(id);
          })
          .catch(err => console.log(err));
      }
    });
  }

  async getCityById(cityId: string): Promise<Object> {
    return await this.cityForecastDb
      .query(Q.where('city_id', Number(cityId)))
      .fetch();
  }

  async getAll(): Promise<Object> {
    return await this.cityForecastDb.query().fetch();
  }
}
