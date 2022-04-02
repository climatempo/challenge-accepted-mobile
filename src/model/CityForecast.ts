import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class CityForecast extends Model {
  static table = 'city_forecast';

  @field('data') data: any;
  @field('city_id') city_id: any;
}