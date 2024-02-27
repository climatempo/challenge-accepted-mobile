import 'package:challenge_accepted_mobile/app/pages/cities_historic_page/cities_historic_page_store.dart';
import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';
import 'package:challenge_accepted_mobile/app/shared/components/list_tile_city.dart';
import 'package:flutter/material.dart';

import '../../shared/components/custom_alert_dialog.dart';
import '../../states/states.dart';
import '../home_screen/home_screen.dart';

class CitiesStoricPage extends StatefulWidget {
  final ICitiesRepository citiesRepository;

  const CitiesStoricPage({super.key, required this.citiesRepository});

  @override
  State<CitiesStoricPage> createState() => _CitiesStoricPageState();
}

class _CitiesStoricPageState extends State<CitiesStoricPage> {
  late CitiesStoricPageStore citiesHistoricPageStore;

  @override
  void initState() {
    super.initState();

    citiesHistoricPageStore =
        CitiesStoricPageStore(citiesRepository: widget.citiesRepository);
    citiesHistoricPageStore.getCitiesHistoric();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.blue,
        title: const Text(
          'Historico',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
      body: AnimatedBuilder(
          animation: citiesHistoricPageStore,
          builder: (context, child) {
            // return Text(citiesStoricPageStore.listStoric.first.country);
            Widget child = Container();
            final state = citiesHistoricPageStore.state;

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
                        citiesHistoricPageStore.getCitiesHistoric();
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
            if (state is LoadedCitiesHistoicState) {
              if (state.citiesList.isEmpty) {
                child = Center(
                  child: Text(
                    'Não ha Histórico.',
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                );
              } else {
                child = SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: Container(
                          constraints: BoxConstraints(
                            maxHeight: MediaQuery.of(context).size.height / 1.5,
                          ),
                          decoration: BoxDecoration(
                            color: Colors.black.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: ListView.separated(
                            reverse: true,
                            shrinkWrap: true,
                            itemCount: state.citiesList.length,
                            separatorBuilder: (context, index) =>
                                const Divider(),
                            itemBuilder: (context, index) {
                              var cityModel = state.citiesList[index];
                              return ListTileCity(
                                cityModel: cityModel,
                                function: () => showDialog(
                                  context: context,
                                  builder: (context) {
                                    return CustomAletDialog(
                                      title: 'Selecionar Cidade?',
                                      titleBt1: 'cancelar',
                                      titleBt2: 'CONFIRMAR',
                                      functionBt1: () => Navigator.pop(context),
                                      functionBt2: () async {
                                        await citiesHistoricPageStore
                                            .fetchCityForecast(
                                          cityModel.id.toString(),
                                        );
                                        Navigator.pop(context);
                                        Navigator.of(context)
                                            .pushAndRemoveUntil(
                                          MaterialPageRoute<void>(
                                            builder: (BuildContext context) =>
                                                HomeScreen(
                                              citiesRepository:
                                                  widget.citiesRepository,
                                              cityModelID:
                                                  cityModel.id.toString(),
                                            ),
                                          ),
                                          (route) => false,
                                        );
                                      },
                                    );
                                  },
                                ),
                              );
                            },
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              }
            }
            return AnimatedSwitcher(
              duration: const Duration(seconds: 1),
              child: child,
            );
          }),
      floatingActionButton: FloatingActionButton(
        onPressed: () => citiesHistoricPageStore.clearAllHistoric(),
        child: const Icon(Icons.delete_forever),
      ),
    );
  }
}
