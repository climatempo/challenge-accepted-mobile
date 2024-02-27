class CityModel {
  final int id;
  final String name;
  final String state;
  final String country;

  CityModel({
    required this.id,
    required this.name,
    required this.state,
    required this.country,
  });

  static emptyCityModel() {
    return CityModel(
      id: 0000,
      name: 'name',
      state: 'state',
      country: 'country',
    );
  }
}
