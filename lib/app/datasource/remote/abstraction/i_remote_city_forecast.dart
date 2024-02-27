abstract class IRemoteCityForecastDatasource {
  Future<Map> fetchCityForecast(String id);
}
