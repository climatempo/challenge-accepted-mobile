import 'dart:convert';

import 'package:challenge_accepted_mobile/app/datasource/remote/abstraction/i_remote_datasource.dart';
import 'package:challenge_accepted_mobile/app/shared/types/constant_values.dart';
import 'package:http/http.dart';

class RemoteFetchCitiesDatasourceImp implements IRemoteFetchCitiesDatasource {
  final Client client;

  RemoteFetchCitiesDatasourceImp({required this.client});

  @override
  Future<List> fetchCities() async {
    final response = await client.get(Uri.parse(LISTCITIES));

    return jsonDecode(response.body);
  }
}
