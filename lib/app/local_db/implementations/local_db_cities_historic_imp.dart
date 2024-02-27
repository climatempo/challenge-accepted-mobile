import 'dart:convert';

import 'package:challenge_accepted_mobile/app/local_db/abstractions/i_local_db_cities_historic.dart';
import 'package:challenge_accepted_mobile/app/shared/adapter/city_adapter.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../shared/types/constant_values.dart';

class LocalDbCitiesHistoricImp implements ILocalDbCitiesHistoric {
  @override
  Future<List> getCitiesHistoric() async {
    final instance = await SharedPreferences.getInstance();
    String? sharedString = instance.getString(CITIESHISTORICKEY);
    sharedString ??= '[]';
    return jsonDecode(sharedString);
  }

  @override
  Future<void> saveCityInHistoric(Map map) async {
    late List list;
    final instance = await SharedPreferences.getInstance();
    String? stringShared = instance.getString(CITIESHISTORICKEY);
    if (stringShared == null) {
      list = [];
    } else {
      list = jsonDecode(stringShared);
    }
    list.add(jsonEncode(CityAdapter.toMap(map)));

    await instance.setString(CITIESHISTORICKEY, jsonEncode(list));
  }

  @override
  Future<void> clearAllHistoric() async {
    final instance = await SharedPreferences.getInstance();
    await instance.remove(CITIESHISTORICKEY);
  }
}
