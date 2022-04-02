import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import CityForecast from '../model/CityForecast';

import schema from '../model/schema';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'climatempo_forecast',
});

export const database = new Database({
  adapter,
  modelClasses: [CityForecast],
});