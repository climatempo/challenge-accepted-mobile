import 'package:challenge_accepted_mobile/app/datasource/local/abstracions/i_local_cities_datasource.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/implementations/remote_city_forecast_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/implementations/remote_fetch_cities_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/local_db/abstractions/i_local_db_cities_historic.dart';
import 'package:challenge_accepted_mobile/app/local_db/abstractions/i_local_db_cities_list.dart';
import 'package:challenge_accepted_mobile/app/local_db/abstractions/i_local_db_city_forecast.dart';
import 'package:mocktail/mocktail.dart';

class CLientMokcityForecast extends Mock
    implements RemoteCityForecastDatasourceImp {}

class ClientMokFetchCities extends Mock
    implements RemoteFetchCitiesDatasourceImp {}

class LocalCitiesDatasourceMok extends Mock
    implements ILocalFetchCitiesDatasource {}

class LocalDbCitiesMok extends Mock implements ILocalDbCities {}

class LocalDbCityForecastMok extends Mock implements ILocalDbCityForecast {}

class LocalDbCitiesHistoricMock extends Mock
    implements ILocalDbCitiesHistoric {}
