import 'dart:convert';
import 'dart:io';

import 'package:challenge_accepted_mobile/app/datasource/local/abstracions/i_local_cities_datasource.dart';
import 'package:challenge_accepted_mobile/app/datasource/local/abstracions/i_local_cities_historic_datasource.dart';
import 'package:challenge_accepted_mobile/app/datasource/local/abstracions/i_local_citiy_forecast_datasource.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/abstraction/i_remote_city_forecast.dart';
import 'package:challenge_accepted_mobile/app/datasource/remote/abstraction/i_remote_datasource.dart';
import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';
import 'package:challenge_accepted_mobile/app/shared/adapter/city_adapter.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_forecast_model.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';

import '../../shared/adapter/city_forecast_adapter.dart';
import '../../shared/exception/my_exeption.dart';

class CitiesRepository implements ICitiesRepository {
  final IRemoteFetchCitiesDatasource remoteFetchCitiesDatasource;
  final ILocalFetchCitiesDatasource localCitiesDatasource;
  final IRemoteCityForecastDatasource remoteCityForecastDatasource;
  final ILocalCityForecastDatasource localCityForecastDatasource;
  final ILocalCitiesHistoricDatasource localCitiesHistoricDatasource;

  CitiesRepository({
    required this.remoteFetchCitiesDatasource,
    required this.localCitiesDatasource,
    required this.remoteCityForecastDatasource,
    required this.localCityForecastDatasource,
    required this.localCitiesHistoricDatasource,
  });

  ///Fetch Cities

  @override
  Future<List<CityModel>> fetchCities() async {
    late List json;

    try {
      json = await remoteFetchCitiesDatasource.fetchCities();
      List<Map> citiesList = json.map((e) => CityAdapter.toMap(e)).toList();
      await saveCitiesList(citiesList);
    } on Exception {
      json = await fetchCitiesLocal();
    }

    if (json.isEmpty) {
      throw FristTimeExeption(
        {
          'error': true,
          'detail': 'É nessesario uma conexção a primeira vez que você entrar'
        },
      );
    }

    return json.map((e) => CityAdapter.fromJson(e)).toList();
  }

  Future<List<Map>> fetchCitiesLocal() async {
    late List<Map> list;
    list = await localCitiesDatasource.fetchCities();
    return list;
  }

  @override
  Future<void> saveCitiesList(List<Map> list) async {
    await localCitiesDatasource.saveCitiesList(list);
  }

  ///FORECAST

  @override
  Future<CityForecastModel> fetchCityForecast(String id) async {
    late Map cityForecast;

    try {
      cityForecast = await remoteCityForecastDatasource.fetchCityForecast(id);
      await saveCityForecast(cityForecast);
    } on SocketException {
      cityForecast = await fetchCityForecastLocal();
    }

    if (cityForecast['error'] == true) {
      // cityForecast = await fetchCityForecastLocal();
      throw LimitAccessError(
          {'error': cityForecast['error'], 'detail': cityForecast['detail']});
    }

    return CityForecastAdapter.fromJson(cityForecast);
  }

  @override
  Future<Map> fetchCityForecastLocal() async {
    late Map cityForecastMap;
    cityForecastMap = await localCityForecastDatasource.fetchCityForecast();
    return cityForecastMap;
  }

  @override
  Future<void> saveCityForecast(Map map) async {
    await localCityForecastDatasource.saveCityForecast(map);
  }

  ///Cities Historic

  @override
  Future<List<CityModel>> getCitiesHistoric() async {
    late List json;
    json = await localCitiesHistoricDatasource.getCitiesHistoric();

    return json.map((e) => CityAdapter.fromJson(jsonDecode(e))).toList();
  }

  @override
  Future<void> saveCityInHistory(Map map) async {
    await localCitiesHistoricDatasource.saveCityInHistoric(map);
  }

  @override
  Future<void> clearAllHistoric() async {
    await localCitiesHistoricDatasource.clearAllHistoric();
  }
}
