import 'package:challenge_accepted_mobile/app/datasource/local/implementations/local_city_forecast_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/datasource/local/implementations/local_fetch_cities_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/implementations/remote_city_forecast_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/implementations/remote_fetch_cities_datasource_imp.dart';
import 'package:challenge_accepted_mobile/app/local_db/implementations/local_db_cities_historic_imp.dart';
import 'package:challenge_accepted_mobile/app/local_db/implementations/local_db_cities_list_imp.dart';
import 'package:challenge_accepted_mobile/app/local_db/implementations/local_db_city_forecast.dart';
import 'package:challenge_accepted_mobile/app/pages/home_page/home_page.dart';
import 'package:challenge_accepted_mobile/app/pages/home_screen/home_screen.dart';
import 'package:challenge_accepted_mobile/app/pages/splash_page/splash_page.dart';
import 'package:challenge_accepted_mobile/app/repository/implementations/cities_repository_imp.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart';

import 'app/datasource/local/implementations/local_cities_historic_datasource_imp.dart';
import 'app/pages/select_city_page/select_city_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Challenge',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        themeMode: ThemeMode.dark,
        initialRoute: '/splash_page',
        routes: {
          '/splash_page': (context) => const SplashPage(),
          '/home_screen': (context) =>
              HomeScreen(citiesRepository: getRepositoriesImp()),
          '/select_city_page': (context) =>
              SelectCityPage(citiesRepository: getRepositoriesImp()),
          '/home_page': (context) =>
              HomePage(citiesRepository: getRepositoriesImp()),
        });
  }
}

getRepositoriesImp() {
  return CitiesRepository(
    remoteFetchCitiesDatasource:
        RemoteFetchCitiesDatasourceImp(client: Client()),
    localCitiesDatasource:
        LocalFetchCitiesDatasoureceImp(localDbCities: LocalDbCitiesImp()),
    remoteCityForecastDatasource:
        RemoteCityForecastDatasourceImp(client: Client()),
    localCityForecastDatasource: LocalCityForecastDatasourceImp(
        localDbCityForecast: LocalDbCityForecastImp()),
    localCitiesHistoricDatasource: LocalCitiesHistoricDatasourceImp(
      localDbCitiesHistoric: LocalDbCitiesHistoricImp(),
    ),
  );
}
