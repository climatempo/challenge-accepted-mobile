import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

import '../../../../moks/moks.dart';

void main() {
  test('remote fetch cities datasource ...', () async {
    final remoteDatasource = ClientMokFetchCities();

    when(() => remoteDatasource.fetchCities())
        .thenAnswer((_) async => Future.value(jsonDecode(_json)));

    List listCities = await remoteDatasource.fetchCities();
    // print(listCities);
    expect(listCities, isA<List>());
    expect(listCities.first['id'], 8285);
  });
}

const _json = r'''
[
    {
        "id": 8285,
        "name": "Abadia de Goiás",
        "state": "GO",
        "country": "BR  "
    },
    {
        "id": 8529,
        "name": "Abadia dos Dourados",
        "state": "MG",
        "country": "BR  "
    },
    {
        "id": 8286,
        "name": "Abadiânia",
        "state": "GO",
        "country": "BR  "
    }
]
''';
