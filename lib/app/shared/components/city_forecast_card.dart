import 'package:flutter/material.dart';

import '../models/forecast_data_model.dart';

class CityForecastCard extends StatelessWidget {
  final ForecastDataModel forecast;
  const CityForecastCard({super.key, required this.forecast});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 20.0),
      child: Card(
        color: Colors.white,
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 20, 16, 0),
              child: Text(
                forecast.dateBr,
                style: Theme.of(context).textTheme.titleLarge,
              ),
            ),
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 16.0, vertical: 5),
              child: Text(
                forecast.textIcon['text']['pt'] ?? '00',
                style: Theme.of(context)
                    .textTheme
                    .titleMedium!
                    .copyWith(fontWeight: FontWeight.normal),
              ),
            ),
            Container(
              margin: EdgeInsets.zero,
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.grey.withOpacity(0.4),
                borderRadius: const BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20),
                ),
              ),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const Column(
                        children: [
                          Icon(Icons.arrow_upward),
                          SizedBox(height: 14),
                          Icon(Icons.water_drop),
                        ],
                      ),
                      Column(
                        children: [
                          Text(
                            '${forecast.temperature['max']}°C',
                            style: Theme.of(context)
                                .textTheme
                                .titleLarge!
                                .copyWith(color: Colors.blue),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            '${forecast.rain['precipitation']}mm',
                            style: Theme.of(context).textTheme.titleLarge!,
                          ),
                        ],
                      ),
                      const SizedBox(),
                      const Column(
                        children: [
                          Icon(Icons.arrow_downward),
                          SizedBox(height: 14),
                          Icon(Icons.beach_access),
                        ],
                      ),
                      Column(
                        children: [
                          Text(
                            '${forecast.temperature['min']}°C',
                            style: Theme.of(context)
                                .textTheme
                                .titleLarge!
                                .copyWith(color: Colors.red[800]),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            '${forecast.rain['probability']}%',
                            style: Theme.of(context).textTheme.titleLarge!,
                          ),
                        ],
                      ),
                    ],
                  ),
                  const Divider(color: Colors.white),
                  Text(
                    'Umidade',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      const Icon(
                        Icons.arrow_upward,
                        color: Colors.red,
                      ),
                      Text(
                        '${forecast.humidity['max']}max',
                        style:
                            Theme.of(context).textTheme.titleMedium!.copyWith(
                                  fontWeight: FontWeight.normal,
                                ),
                      ),
                      const Icon(
                        Icons.arrow_downward,
                        color: Colors.blue,
                      ),
                      Text(
                        '${forecast.humidity['min']}min',
                        style:
                            Theme.of(context).textTheme.titleMedium!.copyWith(
                                  fontWeight: FontWeight.normal,
                                ),
                      ),
                    ],
                  ),
                  const Divider(color: Colors.white),
                  Text(
                    'Vento',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                  const SizedBox(height: 5),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.wind_power),
                      const SizedBox(width: 10),
                      Text(
                        'Media - ${forecast.wind['velocity_avg']}Km',
                        style:
                            Theme.of(context).textTheme.titleMedium!.copyWith(
                                  fontWeight: FontWeight.normal,
                                ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Text(
                        'Max - ${forecast.wind['velocity_max']}km',
                        style:
                            Theme.of(context).textTheme.titleMedium!.copyWith(
                                  fontWeight: FontWeight.normal,
                                ),
                      ),
                      Text(
                        'Min - ${forecast.wind['velocity_min']}km',
                        style:
                            Theme.of(context).textTheme.titleMedium!.copyWith(
                                  fontWeight: FontWeight.normal,
                                ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
