import '../models/forecast_data_model.dart';

class ForecastDataAdpater {
  static ForecastDataModel fromJson(Map map) {
    return ForecastDataModel(
      date: map['date'],
      dateBr: map['date_br'],
      humidity: map['humidity'],
      pressure: map['pressure'],
      rain: map['rain'],
      wind: map['wind'],
      uv: map['uv'],
      thermalSensation: map['thermal_sensation'],
      textIcon: map['text_icon'],
      temperature: map['temperature'],
      cloudCoverage: map['cloud_coverage'],
      sun: map['sun'],
    );
  }
}
