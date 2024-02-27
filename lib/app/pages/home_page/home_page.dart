import 'package:challenge_accepted_mobile/app/shared/components/city_forecast_card.dart';
import 'package:challenge_accepted_mobile/app/states/states.dart';
import 'package:flutter/material.dart';

import 'package:challenge_accepted_mobile/app/pages/home_page/home_page_store.dart';
import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';
import 'package:challenge_accepted_mobile/app/shared/adapter/forecast_data_adapter.dart';
import 'package:challenge_accepted_mobile/app/shared/models/forecast_data_model.dart';

class HomePage extends StatefulWidget {
  final ICitiesRepository citiesRepository;
  final String? cityModelID;

  const HomePage({super.key, required this.citiesRepository, this.cityModelID});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late HomePageStore homePageStore;

  @override
  void initState() {
    super.initState();

    homePageStore = HomePageStore(
      citiesRepository: widget.citiesRepository,
      cityModelID: widget.cityModelID.toString(),
    );
    homePageStore.fetchCityForecast();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.blue,
        title: const Text(
          'CLIMATEMPO',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
      body: AnimatedBuilder(
        animation: homePageStore,
        builder: (context, child) {
          final state = homePageStore.state;
          Widget child = Container();
          if (state is LoadingState) {
            child = const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (state is ErrorState) {
            child = Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    state.message,
                    style: Theme.of(context).textTheme.titleMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      homePageStore.fetchCityForecast();
                    },
                    child: Text(
                      'Tentar Novamente',
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                  )
                ],
              ),
            );
          }
          if (state is LoadedForecastState) {
            child = Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: 20,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      vertical: 20.0,
                      horizontal: 4,
                    ),
                    child: Text(
                      'Previsão para ${state.forecastModel.name} - ${state.forecastModel.state}',
                      style: Theme.of(context)
                          .textTheme
                          .titleLarge!
                          .copyWith(fontWeight: FontWeight.w500),
                    ),
                  ),
                  Flexible(
                    child: ListView.builder(
                      shrinkWrap: true,
                      padding: const EdgeInsets.only(bottom: 40),
                      itemCount: state.forecastModel.data.length,
                      itemBuilder: (context, index) {
                        ForecastDataModel forecast =
                            ForecastDataAdpater.fromJson(
                          state.forecastModel.data[index],
                        );
                        return CityForecastCard(forecast: forecast);
                      },
                    ),
                  ),
                ],
              ),
            );
          }

          return AnimatedSwitcher(
            duration: const Duration(seconds: 3),
            child: child,
          );
        },
      ),
    );
  }
}
