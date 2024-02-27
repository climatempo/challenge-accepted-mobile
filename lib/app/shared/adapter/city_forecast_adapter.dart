import 'package:challenge_accepted_mobile/app/shared/models/city_forecast_model.dart';

class CityForecastAdapter {
  static CityForecastModel fromJson(Map map) {
    return CityForecastModel(
      id: map['id'],
      name: map['name'],
      state: map['state'],
      country: map['country'],
      meteogram: map['meteogram'],
      data: map['data'],
    );
  }

  static Map<String, dynamic> toMap(Map map) {
    return <String, dynamic>{
      'id': map['id'],
      'name': map['name'],
      'state': map['state'],
      'country': map['country'],
      'meteogram': map['meteogram'],
      'data': map['data'],
    };
  }

  static Map<String, dynamic> forecastToMap(
      CityForecastModel cityForecastModel) {
    return <String, dynamic>{
      'id': cityForecastModel.id,
      'name': cityForecastModel.name,
      'state': cityForecastModel.state,
      'country': cityForecastModel.country,
      'meteogram': cityForecastModel.meteogram,
      'data': cityForecastModel.data,
    };
  }
}
