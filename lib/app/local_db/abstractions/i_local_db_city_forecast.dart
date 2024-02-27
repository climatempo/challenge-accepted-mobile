abstract class ILocalDbCityForecast {
  Future<Map> fetchCityForecast();
  Future<void> saveCityForecast(Map city);
}
