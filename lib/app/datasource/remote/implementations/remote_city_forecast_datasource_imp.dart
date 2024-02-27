import 'dart:convert';
import 'package:challenge_accepted_mobile/app/datasource/remote/abstraction/i_remote_city_forecast.dart';
import 'package:challenge_accepted_mobile/app/shared/types/constant_values.dart';
import 'package:http/http.dart';

class RemoteCityForecastDatasourceImp implements IRemoteCityForecastDatasource {
  final Client client;

  RemoteCityForecastDatasourceImp({required this.client});
  @override
  Future<Map> fetchCityForecast(String id) async {
    final response =
        await client.get(Uri.parse(FORECASTURL.replaceAll('id', id)));

    final Map json = jsonDecode(response.body);

    return json;
  }
}
