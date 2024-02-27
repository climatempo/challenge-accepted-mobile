abstract class ILocalCityForecastDatasource {
  Future<Map> fetchCityForecast();
  Future<void> saveCityForecast(Map map);
}
