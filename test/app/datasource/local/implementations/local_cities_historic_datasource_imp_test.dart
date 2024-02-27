import 'package:challenge_accepted_mobile/app/datasource/local/implementations/local_cities_historic_datasource_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../moks/moks.dart';

void main() {
  late LocalDbCitiesHistoricMock localDbCitiesHistoric;
  late LocalCitiesHistoricDatasourceImp localCitiesHistoricDatasource;

  setUp(() {
    localDbCitiesHistoric = LocalDbCitiesHistoricMock();

    localCitiesHistoricDatasource = LocalCitiesHistoricDatasourceImp(
        localDbCitiesHistoric: localDbCitiesHistoric);
  });

  test('get cities historic datasource', () async {
    when(() => localDbCitiesHistoric.getCitiesHistoric())
        .thenAnswer((_) async => Future<List>.value([]));
    List result = await localCitiesHistoricDatasource.getCitiesHistoric();

    expect(result, isA<List>());
  });

  test('save city in historic datasource', () async {
    when(() => localDbCitiesHistoric.saveCityInHistoric(any()))
        .thenAnswer((_) async => Future.value());

    Future<void> save = localCitiesHistoricDatasource.saveCityInHistoric({});

    expect(save, completes);
  });

  test('clear all historic datasource', () async {
    when(() => localDbCitiesHistoric.clearAllHistoric())
        .thenAnswer((_) async => Future<void>.value());

    Future<void> clear = localCitiesHistoricDatasource.clearAllHistoric();

    expect(clear, completes);
  });
}
