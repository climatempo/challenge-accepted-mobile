import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import '../../shared/types/constant_values.dart';
import '../abstractions/i_local_db_city_forecast.dart';

class LocalDbCityForecastImp implements ILocalDbCityForecast {
  @override
  Future<Map> fetchCityForecast() async {
    final instance = await SharedPreferences.getInstance();
    final sharedString = instance.getString(CITYFORECASTKEY);

    return jsonDecode(sharedString!);
  }

  @override
  Future<void> saveCityForecast(Map city) async {
    final instance = await SharedPreferences.getInstance();
    await instance.remove(CITYFORECASTKEY);
    await instance.setString(CITYFORECASTKEY, jsonEncode(city));
  }
}
