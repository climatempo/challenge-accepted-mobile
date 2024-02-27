import 'package:challenge_accepted_mobile/app/datasource/local/implementations/local_fetch_cities_datasource_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../moks/moks.dart';

void main() {
  late LocalDbCitiesMok localDbCities;
  late LocalFetchCitiesDatasoureceImp localFetchCitiesDatasource;

  setUp(() {
    localDbCities = LocalDbCitiesMok();

    localFetchCitiesDatasource =
        LocalFetchCitiesDatasoureceImp(localDbCities: localDbCities);
  });

  test('fetch local cities datasource imp ...', () async {
    when(() => localDbCities.fetchCities())
        .thenAnswer((_) async => Future<List<Map>>.value([]));

    List<Map> result = await localFetchCitiesDatasource.fetchCities();

    expect(result, isA<List>());
  });

  test('save cities history', () async {
    when(() => localDbCities.saveCitiesList([]))
        .thenAnswer((_) async => Future<void>.value());

    var save = localFetchCitiesDatasource.saveCitiesList([]);

    expect(save, completes);
  });
}
