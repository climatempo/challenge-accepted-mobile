import '../../shared/models/city_forecast_model.dart';
import '../../shared/models/city_model.dart';

abstract class ICitiesRepository {
  Future<List<CityModel>> fetchCities();
  Future<void> saveCitiesList(List<Map> list);
  Future<CityForecastModel> fetchCityForecast(String id);
  Future<void> saveCityForecast(Map map);
  Future<List<CityModel>> getCitiesHistoric();
  Future<void> saveCityInHistory(Map map);
  Future<void> clearAllHistoric();
  Future<Map> fetchCityForecastLocal();
}
