import 'package:challenge_accepted_mobile/app/shared/adapter/city_forecast_adapter.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_forecast_model.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  late CityForecastModel cityForecastModel;
  late Map cityForecastMap;
  setUp(() {
    cityForecastModel = CityForecastModel(
      id: 3477,
      name: 'São Paulo',
      state: 'SP',
      country: 'BR',
      meteogram: 'meteogram',
      data: [],
    );
    cityForecastMap = {
      "id": 3477,
      "name": "São Paulo",
      "state": "SP",
      "country": "BR",
      "meteogram":
          "http://apiadvisor.climatempo.com.br/api/v1/meteogram/locale/3477?token=221a1bca13a7262e53c72cbffa5f0df1&hash=0384e34d36ae0482a2c4f9abd889cec3",
      "data": []
    };
  });
  test('city forecast fromJson', () async {
    var cityForecast = CityForecastAdapter.fromJson(cityForecastMap);
    expect(cityForecast.id, 3477);
    expect(cityForecast.name, 'São Paulo');
  });
  test('city forecast toMap', () async {
    var forecastMap = CityForecastAdapter.toMap(cityForecastMap);
    expect(forecastMap['id'], 3477);
    expect(forecastMap['name'], 'São Paulo');
  });
  test('city forecast forecastToMap', () async {
    var forecastMap = CityForecastAdapter.forecastToMap(cityForecastModel);
    expect(forecastMap['id'], 3477);
    expect(forecastMap['name'], 'São Paulo');
  });
}
