abstract class ILocalFetchCitiesDatasource {
  Future<List<Map>> fetchCities();
  Future<void> saveCitiesList(List<Map> list);
}
