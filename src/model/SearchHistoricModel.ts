import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import { database } from '../services/database';
import { Q } from '@nozbe/watermelondb';

export default class SearchHistoricModel extends Model {
  static table = 'historic';
  private readonly searchHistoricDb = database.collections.get('historic')

  @field('data') data: any;
  @field('city_id') city_id: any;

  async saveOnHistoric(id: number, cityStringified: string) {

    await database.write(async () => {
      const storageCity = await this.searchHistoricDb.query(Q.where('city_id', Number(id))).fetch()
      if (storageCity.length > 0) {

        await storageCity[0].update((city: any) => {
          city.data = cityStringified
        }).catch(err => console.log(err))
      } else {
        await this.searchHistoricDb.create((city: any) => {
          city.data = cityStringified
          city.city_id = Number(id)
        }).catch(err => console.log(err))
      }

    })
  }

  async getAll(): Promise<any[]> {
    return await this.searchHistoricDb.query().fetch()
  }

  async getCityById(cityId: string, id?: string): Promise<any> {
    return await this.searchHistoricDb.query(Q.where('city_id', Number(cityId))).fetch()
  }

  async deleteCityFromHistoric(cityId: string): Promise<void> {
    const city = await this.searchHistoricDb.query(Q.where('city_id', Number(cityId))).fetch()
    await database.write(async () => {
      await city[0].destroyPermanently()
    })
  }


}