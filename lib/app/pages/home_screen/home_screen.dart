// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:challenge_accepted_mobile/app/pages/select_city_page/select_city_page.dart';
import 'package:flutter/material.dart';

import 'package:challenge_accepted_mobile/app/pages/home_page/home_page.dart';
import 'package:challenge_accepted_mobile/app/repository/abstractions/i_cities_repository.dart';

import '../cities_historic_page/cities_historic_page.dart';

class HomeScreen extends StatefulWidget {
  final ICitiesRepository citiesRepository;
  final String? cityModelID;

  const HomeScreen(
      {super.key, required this.citiesRepository, this.cityModelID});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _currentPage = 1;
  var _pageController = PageController();

  @override
  void initState() {
    super.initState();
    _pageController = PageController(initialPage: _currentPage);
  }

  _setCurrentPage(page) {
    setState(() {
      _currentPage = page;
    });
  }

  @override
  Widget build(BuildContext context) {
    final cityModelID = ModalRoute.of(context)?.settings.arguments.toString();
    String? cityModelId = widget.cityModelID ?? cityModelID;

    return Scaffold(
      body: PageView(
        controller: _pageController,
        onPageChanged: _setCurrentPage,
        physics: const NeverScrollableScrollPhysics(),
        children: [
          SelectCityPage(citiesRepository: widget.citiesRepository),
          HomePage(
            citiesRepository: widget.citiesRepository,
            cityModelID: cityModelId,
          ),
          CitiesStoricPage(citiesRepository: widget.citiesRepository),
        ],
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentPage,
        labelBehavior: NavigationDestinationLabelBehavior.onlyShowSelected,
        onDestinationSelected: (newIndex) {
          _pageController.jumpToPage(newIndex);
          setState(() {
            _currentPage = newIndex;
          });
        },
        destinations: [
          NavigationDestination(
            icon: const Icon(Icons.search),
            label: 'List',
            tooltip: '',
            selectedIcon: Icon(
              Icons.search,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
          NavigationDestination(
            icon: const Icon(Icons.home),
            label: 'Home',
            tooltip: '',
            selectedIcon: Icon(
              Icons.home,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
          NavigationDestination(
            icon: const Icon(Icons.history),
            label: 'History',
            tooltip: '',
            selectedIcon: Icon(
              Icons.history,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
        ],
      ),
    );
  }
}
