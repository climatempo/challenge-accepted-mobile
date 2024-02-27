import 'package:challenge_accepted_mobile/app/shared/adapter/city_adapter.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  late CityModel cityModel;
  late Map cityModelMap;
  setUp(() {
    cityModel = CityModel(
      id: 3477,
      name: 'São Paulo',
      state: 'SP',
      country: 'BR',
    );
    cityModelMap = {
      "id": 3477,
      "name": "São Paulo",
      "state": "SP",
      "country": "BR"
    };
  });
  test('city adapter fromJson', () async {
    var city = CityAdapter.fromJson(cityModelMap);
    expect(city.id, 3477);
    expect(city.name, 'São Paulo');
  });
  test('city adapter toMapCityModel', () async {
    var city = CityAdapter.toMapCityModel(cityModel);
    expect(city['id'], 3477);
    expect(city['name'], 'São Paulo');
  });
  test('city adapter toMap', () async {
    var city = CityAdapter.toMap(cityModelMap);
    expect(city['id'], 3477);
    expect(city['name'], 'São Paulo');
  });
}
