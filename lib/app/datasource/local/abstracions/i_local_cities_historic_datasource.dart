abstract class ILocalCitiesHistoricDatasource {
  Future<List> getCitiesHistoric();
  Future<void> saveCityInHistoric(Map map);
  Future<void> clearAllHistoric();
}
