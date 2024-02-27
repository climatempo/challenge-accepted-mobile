import 'dart:io';

import 'package:challenge_accepted_mobile/app/states/states.dart';
import 'package:flutter/material.dart';

import '../../repository/abstractions/i_cities_repository.dart';
import '../../shared/exception/my_exeption.dart';
import '../../shared/models/city_forecast_model.dart';

class HomePageStore extends ChangeNotifier {
  final ICitiesRepository citiesRepository;
  final String cityModelID;

  HomePageStore({
    required this.citiesRepository,
    required this.cityModelID,
  });

  StatesApp _statesApp = InitialStateForecast();
  StatesApp get state => _statesApp;

  late CityForecastModel cityForecastModel;

  Future<void> fetchCityForecast() async {
    _statesApp = LoadingState();
    notifyListeners();

    try {
      cityForecastModel = await citiesRepository.fetchCityForecast(cityModelID);
      _statesApp = LoadedForecastState(cityForecastModel);
    } on SocketException catch (e) {
      _statesApp = ErrorState(e.message);
    } on LimitAccessError catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on FristTimeExeption catch (e) {
      _statesApp = ErrorState('${e.message['detail']}');
    } on FormatException {
      _statesApp = ErrorState('Selecione outra Cidade!');
    } finally {
      notifyListeners();
    }
  }
}
