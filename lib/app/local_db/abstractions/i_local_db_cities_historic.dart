abstract class ILocalDbCitiesHistoric {
  Future<List> getCitiesHistoric();
  Future<void> saveCityInHistoric(Map map);
  Future<void> clearAllHistoric();
}
