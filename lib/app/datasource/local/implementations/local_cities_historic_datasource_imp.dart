import 'package:challenge_accepted_mobile/app/datasource/local/abstracions/i_local_cities_historic_datasource.dart';
import 'package:challenge_accepted_mobile/app/local_db/abstractions/i_local_db_cities_historic.dart';

class LocalCitiesHistoricDatasourceImp
    implements ILocalCitiesHistoricDatasource {
  final ILocalDbCitiesHistoric localDbCitiesHistoric;

  LocalCitiesHistoricDatasourceImp({required this.localDbCitiesHistoric});
  @override
  Future<List> getCitiesHistoric() async {
    return await localDbCitiesHistoric.getCitiesHistoric();
  }

  @override
  Future<void> saveCityInHistoric(Map map) async {
    await localDbCitiesHistoric.saveCityInHistoric(map);
  }

  @override
  Future<void> clearAllHistoric() async {
    await localDbCitiesHistoric.clearAllHistoric();
  }
}
