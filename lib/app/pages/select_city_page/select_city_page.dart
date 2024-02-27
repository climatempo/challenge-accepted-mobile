import 'package:challenge_accepted_mobile/app/pages/home_screen/home_screen.dart';
import 'package:challenge_accepted_mobile/app/shared/adapter/city_adapter.dart';
import 'package:challenge_accepted_mobile/app/shared/components/custom_alert_dialog.dart';
import 'package:challenge_accepted_mobile/app/shared/models/city_model.dart';
import 'package:challenge_accepted_mobile/app/states/states.dart';
import 'package:flutter/material.dart';

import '../../repository/abstractions/i_cities_repository.dart';
import 'select_city_page_store.dart';

class SelectCityPage extends StatefulWidget {
  final ICitiesRepository citiesRepository;

  const SelectCityPage({super.key, required this.citiesRepository});

  @override
  State<SelectCityPage> createState() => _SelectCityPageState();
}

class _SelectCityPageState extends State<SelectCityPage> {
  late SelectCityPageStore selectCityPageStore;

  final textEditingController = TextEditingController();

  @override
  void initState() {
    super.initState();
    selectCityPageStore =
        SelectCityPageStore(citiesRepository: widget.citiesRepository);
    selectCityPageStore.fetchCities();
  }

  List<CityModel> listCities = [];

  Future<void> _filter() async {
    if (selectCityPageStore.filter.isEmpty) {
      listCities = selectCityPageStore.listCities;
    } else {
      listCities = selectCityPageStore.listFiltered;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.blue,
        title: const Text(
          'Selecione sua Cidade',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
      body: AnimatedBuilder(
        animation: selectCityPageStore,
        builder: (context, child) {
          final state = selectCityPageStore.state;
          _filter();
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
                      selectCityPageStore.fetchCities();
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
          if (state is LoadedCitiesState) {
            child = SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 40.0),
                    child: TextFormField(
                      controller: textEditingController,
                      decoration: const InputDecoration(
                        icon: Icon(Icons.search),
                        hintText: 'Nome Da Cidade',
                      ),
                      onChanged: (value) {
                        setState(() {
                          selectCityPageStore.filter = value;
                          selectCityPageStore.listCitiesSearch();
                        });
                      },
                    ),
                  ),
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
                        shrinkWrap: true,
                        itemCount: listCities.length,
                        separatorBuilder: (context, index) => const Divider(),
                        itemBuilder: (context, index) {
                          var cityModel = listCities[index];
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
                            onTap: () {
                              showDialog(
                                context: context,
                                builder: (context) {
                                  return CustomAletDialog(
                                    title: 'Selecionar Cidade?',
                                    titleBt1: 'cancelar',
                                    titleBt2: 'CONFIRMAR',
                                    functionBt1: () => Navigator.pop(context),
                                    functionBt2: () async {
                                      await selectCityPageStore
                                          .saveCityInHistory(
                                        CityAdapter.toMapCityModel(cityModel),
                                      );
                                      await selectCityPageStore
                                          .saveLocalForecast(
                                              cityModel.id.toString());
                                      Navigator.of(context).pushAndRemoveUntil(
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
                              );
                            },
                          );
                        },
                      ),
                    ),
                  ),
                  Text(
                    'Total disponiveis\n${listCities.length}',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  )
                ],
              ),
            );
          }
          return AnimatedSwitcher(
            duration: const Duration(seconds: 1),
            child: child,
          );
        },
      ),
    );
  }
}
