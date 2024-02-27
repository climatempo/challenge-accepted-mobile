abstract class ILocalDbCities {
  Future<List> fetchCities();
  Future<void> saveCitiesList(List<Map> list);
}
