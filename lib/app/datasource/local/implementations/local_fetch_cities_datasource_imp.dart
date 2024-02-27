import 'package:challenge_accepted_mobile/app/shared/adapter/city_adapter.dart';

import '../abstracions/i_local_cities_datasource.dart';
import '../../../local_db/abstractions/i_local_db_cities_list.dart';

class LocalFetchCitiesDatasoureceImp implements ILocalFetchCitiesDatasource {
  final ILocalDbCities localDbCities;

  LocalFetchCitiesDatasoureceImp({required this.localDbCities});

  @override
  Future<List<Map>> fetchCities() async {
    final localCitiesList = await localDbCities.fetchCities();
    List<Map> list = localCitiesList.map((e) => CityAdapter.toMap(e)).toList();
    return list;
  }

  @override
  Future<void> saveCitiesList(List<Map> citiesList) async {
    await localDbCities.saveCitiesList(citiesList);
  }
}
