import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import CityForecastModel from '../model/CityForecastModel';

import schema from '../model/schema';
import SearchHistoricModel from '../model/SearchHistoricModel';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'climatempo_forecast',
});

export const database = new Database({
  adapter,
  modelClasses: [CityForecastModel, SearchHistoricModel],
});
