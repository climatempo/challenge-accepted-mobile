import 'package:challenge_accepted_mobile/app/local_db/implementations/local_db_cities_historic_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('should retun an historic list', () {
    SharedPreferences.setMockInitialValues({'CITIESHISTORICKEY': _json});
    var localDbHistoric = LocalDbCitiesHistoricImp();
    var list = localDbHistoric.getCitiesHistoric();
    expect(list, completes);
  });

  test('should save city in historic', () async {
    SharedPreferences.setMockInitialValues({'CITIESHISTORICKEY': _json});
    var localDbHistoric = LocalDbCitiesHistoricImp();
    var saveCity = localDbHistoric.saveCityInHistoric({});
    expect(saveCity, completes);
  });

  test('clear Historic', () {
    SharedPreferences.setMockInitialValues({'CITIESHISTORICKEY': _json});
    var localDbHistoric = LocalDbCitiesHistoricImp();
    var clear = localDbHistoric.clearAllHistoric();
    expect(clear, completes);
  });
}

const _json = r'''
[]
''';
