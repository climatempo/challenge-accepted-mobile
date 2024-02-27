import 'dart:convert';

import 'package:challenge_accepted_mobile/app/shared/types/constant_values.dart';

import '../abstractions/i_local_db_cities_list.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LocalDbCitiesImp implements ILocalDbCities {
  @override
  Future<List> fetchCities() async {
    final instance = await SharedPreferences.getInstance();

    var sharedString = instance.getString(LISTCITIESKEY);
    sharedString ??= '[]';
    List result = jsonDecode(sharedString);
    return result;
  }

  @override
  Future<void> saveCitiesList(List<Map> citiesList) async {
    final instance = await SharedPreferences.getInstance();
    await instance.setString(LISTCITIESKEY, jsonEncode(citiesList));
  }
}
