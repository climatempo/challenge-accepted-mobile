import 'package:challenge_accepted_mobile/app/datasource/local/implementations/local_city_forecast_datasource_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../moks/moks.dart';

void main() {
  late LocalDbCityForecastMok localDbCityForecast;
  late LocalCityForecastDatasourceImp localCityForecastDatasourceImp;

  setUp(() {
    localDbCityForecast = LocalDbCityForecastMok();

    localCityForecastDatasourceImp = LocalCityForecastDatasourceImp(
        localDbCityForecast: localDbCityForecast);
  });
  test('fetch city forecast datasource ', () async {
    when(() => localDbCityForecast.fetchCityForecast())
        .thenAnswer((_) => Future<Map>.value({}));
    Map city = await localCityForecastDatasourceImp.fetchCityForecast();
    expect(city, isA<Map>());
  });

  test('save city forecast', () async {
    when(() => localDbCityForecast.saveCityForecast({}))
        .thenAnswer((_) => Future<Map>.value({}));

    Future<void> save = localCityForecastDatasourceImp.saveCityForecast({});

    expect(save, completes);
  });
}
