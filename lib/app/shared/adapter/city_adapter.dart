import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';

class CityAdapter {
  static CityModel fromJson(Map map) {
    return CityModel(
      id: map['id'],
      name: map['name'],
      state: map['state'],
      country: map['country'],
    );
  }

  static Map<String, dynamic> toMapCityModel(CityModel cityModel) {
    return <String, dynamic>{
      'id': cityModel.id,
      'name': cityModel.name,
      'state': cityModel.state,
      'country': cityModel.country,
    };
  }

  static Map<String, dynamic> toMap(Map map) {
    return <String, dynamic>{
      'id': map['id'],
      'name': map['name'],
      'state': map['state'],
      'country': map['country'],
    };
  }
}
