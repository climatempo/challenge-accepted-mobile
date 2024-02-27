import 'package:challenge_accepted_mobile/app/shared/models/city_forecast_model.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';

abstract class StatesApp {}

class LoadingState extends StatesApp {}

class ErrorState extends StatesApp {
  final String message;

  ErrorState(this.message);
}

class LoadedForecastState extends StatesApp {
  final CityForecastModel forecastModel;

  LoadedForecastState(this.forecastModel);
}

class InitialStateForecast extends LoadedForecastState {
  InitialStateForecast() : super(CityForecastModel.emptyForecast());
}

class LoadedCitiesState extends StatesApp {
  final List<CityModel> citiesList;

  LoadedCitiesState(this.citiesList);
}

class InitialStateCities extends LoadedCitiesState {
  InitialStateCities() : super([]);
}

class LoadedCitiesHistoicState extends StatesApp {
  final List<CityModel> citiesList;

  LoadedCitiesHistoicState(this.citiesList);
}

class InitialStateCitiesHistoric extends LoadedCitiesHistoicState {
  InitialStateCitiesHistoric() : super([]);
}
