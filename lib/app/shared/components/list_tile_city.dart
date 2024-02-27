import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';
import 'package:flutter/material.dart';

class ListTileCity extends StatelessWidget {
  final CityModel cityModel;
  final Function function;

  const ListTileCity(
      {super.key, required this.cityModel, required this.function});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Text(
        cityModel.state.toString(),
        style: Theme.of(context).textTheme.titleMedium,
      ),
      title: Text(
        cityModel.name,
        style: Theme.of(context).textTheme.titleMedium,
      ),
      trailing: Text(
        cityModel.country,
        style: Theme.of(context).textTheme.titleMedium,
      ),
      onTap: () => function(),
    );
  }
}
