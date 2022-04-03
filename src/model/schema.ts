import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'city_forecast',
      columns: [
        {name: 'city_id', type: 'number', isIndexed: true},
        {name: 'data', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'historic',
      columns: [
        {name: 'city_id', type: 'number', isIndexed: true},
        {name: 'data', type: 'string'},
      ],
    }),
  ],
});
