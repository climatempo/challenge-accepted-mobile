import '../../../local_db/abstractions/i_local_db_city_forecast.dart';

import '../abstracions/i_local_citiy_forecast_datasource.dart';

class LocalCityForecastDatasourceImp implements ILocalCityForecastDatasource {
  final ILocalDbCityForecast localDbCityForecast;

  LocalCityForecastDatasourceImp({required this.localDbCityForecast});
  @override
  Future<Map> fetchCityForecast() async {
    final cityForecast = await localDbCityForecast.fetchCityForecast();
    return cityForecast;
  }

  @override
  Future<void> saveCityForecast(Map city) async {
    await localDbCityForecast.saveCityForecast(city);
  }
}
