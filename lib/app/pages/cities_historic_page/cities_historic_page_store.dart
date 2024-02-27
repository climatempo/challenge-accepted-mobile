import 'dart:io';

import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';
import 'package:flutter/material.dart';

import '../../shared/exception/my_exeption.dart';
import '../../shared/models/city_forecast_model.dart';
import '../../states/states.dart';

class CitiesStoricPageStore extends ChangeNotifier {
  final ICitiesRepository citiesRepository;

  CitiesStoricPageStore({required this.citiesRepository});

  List<CityModel> listStoric = [];

  StatesApp _statesApp = InitialStateForecast();
  StatesApp get state => _statesApp;

  Future<void> getCitiesHistoric() async {
    _statesApp = LoadingState();
    notifyListeners();

    try {
      listStoric = await citiesRepository.getCitiesHistoric();
      _statesApp = LoadedCitiesHistoicState(listStoric);
    } on FristTimeExeption catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on LimitAccessError catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on SocketException {
      _statesApp = ErrorState('Erro de Conexão');
    } finally {
      notifyListeners();
    }
  }

  Future<CityForecastModel?> fetchCityForecast(String id) async {
    CityForecastModel cityForecastModel = CityForecastModel.emptyForecast();
    try {
      cityForecastModel = await citiesRepository.fetchCityForecast(id);
    } on FristTimeExeption catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on LimitAccessError catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on SocketException {
      _statesApp = ErrorState('tentar novamente');
    } finally {
      notifyListeners();
    }
    return cityForecastModel;
  }

  Future<void> clearAllHistoric() async {
    await citiesRepository.clearAllHistoric();
    await getCitiesHistoric();
    notifyListeners();
  }
}
