import 'package:challenge_accepted_mobile/app/local_db/implementations/local_db_cities_list_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('should retun an list cities', () async {
    SharedPreferences.setMockInitialValues({'LISTCITIESKEY': _json});

    final localDB = LocalDbCitiesImp();

    List listCities = await localDB.fetchCities();

    expect(listCities.first['id'], 8285);
    expect(listCities.first['name'], 'Abadia de Goiás');
    expect(listCities.first['state'], 'GO');
    expect(listCities.first['country'], 'BR  ');
  });

  test('save cities history', () async {
    SharedPreferences.setMockInitialValues({'LISTCITIESKEY': _json});

    final localDB = LocalDbCitiesImp();
    var save = localDB.saveCitiesList([]);
    expect(save, completes);
  });

  test('don not have data', () async {
    SharedPreferences.setMockInitialValues({'LISTCITIESKEY': ''});

    final localDb = LocalDbCitiesImp();
    var result = localDb.fetchCities();
    expect(() => result, throwsA(isA<Exception>()));
  });
}

const _json = r'''
[
    {
        "id": 8285,
        "name": "Abadia de Goiás",
        "state": "GO",
        "country": "BR  "
    },
    {
        "id": 8529,
        "name": "Abadia dos Dourados",
        "state": "MG",
        "country": "BR  "
    },
    {
        "id": 8286,
        "name": "Abadiânia",
        "state": "GO",
        "country": "BR  "
    }
]
''';
