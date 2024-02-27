import 'dart:io';

import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';
import 'package:challenge_accepted_mobile/app/shared/exception/my_exeption.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';
import 'package:challenge_accepted_mobile/app/states/states.dart';
import 'package:flutter/foundation.dart';

import '../../shared/models/city_forecast_model.dart';

class SelectCityPageStore extends ChangeNotifier {
  List<CityModel> listCities = [];
  final ICitiesRepository citiesRepository;
  SelectCityPageStore({required this.citiesRepository});

  StatesApp _statesApp = InitialStateForecast();
  StatesApp get state => _statesApp;

  late CityForecastModel cityForecastModel;

  Future<void> fetchCities() async {
    _statesApp = LoadingState();
    notifyListeners();

    try {
      listCities = await citiesRepository.fetchCities();

      _statesApp = LoadedCitiesState(listCities);
    } on SocketException {
      _statesApp = ErrorState(
          'É nessesario conexão a internet\npara que sejam exibidas as informações');
    } on FristTimeExeption catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on LimitAccessError catch (e) {
      _statesApp = ErrorState('   ${e.message['detail']}');
    } on MyException catch (e) {
      _statesApp = ErrorState(
          '${e.message['detail']}\n ${e.message['retry-after'] ?? ''}');
    } finally {
      notifyListeners();
    }
  }

  Future<void> saveLocalForecast(String id) async {
    try {
      await citiesRepository.fetchCityForecast(id);
    } on LimitAccessError catch (e) {
      _statesApp = ErrorState('   ${e.message['detail']}');
    } on SocketException {
      _statesApp = ErrorState(
          'É nessesario conexão a internet\npara que sejam exibidas as informações');
    }
  }

  String filter = '';
  List<CityModel> listFiltered = [];

  List<CityModel> listCitiesSearch() {
    if (filter.isEmpty) {
      listFiltered = listCities;
      return listFiltered;
    } else {
      listFiltered = listCities
          .where((element) =>
              element.name.toLowerCase().contains(filter.toLowerCase()))
          .toList();
    }
    notifyListeners();
    return listFiltered;
  }

  Future<void> saveCityInHistory(Map map) async {
    await citiesRepository.saveCityInHistory(map);
  }
}
