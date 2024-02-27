import 'dart:convert';

import 'package:challenge_accepted_mobile/app/datasource/remote/implementations/remote_city_forecast_datasource_imp.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart%20';
import 'package:mocktail/mocktail.dart';

import '../../../../moks/moks.dart';

void main() {
  test('remote city forecas datasource completes', () {
    final remoteCityForecastDatasource = CLientMokcityForecast();

    when(() => remoteCityForecastDatasource.fetchCityForecast('3477'))
        .thenAnswer((_) async => Future.value(jsonDecode(_json)));

    var result = remoteCityForecastDatasource.fetchCityForecast('3477');
    expect(result, completes);
  });

  test(
    'remote city forecast datasource ...',
    () async {
      final remoteCityForecastDatasource = CLientMokcityForecast();

      when(() => remoteCityForecastDatasource.fetchCityForecast('3477'))
          .thenAnswer((_) async => Future.value(jsonDecode(_json)));
      Map cityForecastMapResult =
          await remoteCityForecastDatasource.fetchCityForecast('3477');

      expect(cityForecastMapResult, isA<Map>());
      expect(cityForecastMapResult['id'], 3477);
      expect(cityForecastMapResult['name'], 'São Paulo');
      expect(cityForecastMapResult['country'], 'BR');
    },
  );

  test('city forecast Access forbidden, you have no acces for this locale',
      () async {
    final remoteCityForecastDatasource =
        RemoteCityForecastDatasourceImp(client: Client());

    var cityForecastResult =
        await remoteCityForecastDatasource.fetchCityForecast('0099');
    expect(cityForecastResult, isA<Map>());
    expect(cityForecastResult['detail'],
        'Access forbidden, you have no acces for this locale: 99');
  });
}

const _json = r"""
{
    "id": 3477,
    "name": "São Paulo",
    "state": "SP",
    "country": "BR",
    "meteogram": "http://apiadvisor.climatempo.com.br/api/v1/meteogram/locale/3477?token=221a1bca13a7262e53c72cbffa5f0df1&hash=0384e34d36ae0482a2c4f9abd889cec3",
    "data": [
        {
            "date": "2024-02-20",
            "date_br": "20/02/2024",
            "humidity": {
                "min": 66,
                "max": 89,
                "dawn": {
                    "min": 66,
                    "max": 80
                },
                "morning": {
                    "min": 82,
                    "max": 89
                },
                "afternoon": {
                    "min": 71,
                    "max": 89
                },
                "night": {
                    "min": 66,
                    "max": 72
                }
            },
            "pressure": {
                "pressure": 1007.3
            },
            "rain": {
                "precipitation": 25,
                "probability": 94
            },
            "wind": {
                "dawn": {
                    "velocity_min": 5,
                    "velocity_max": 9,
                    "velocity_avg": 6,
                    "direction_degrees": 109,
                    "direction": "E",
                    "gust_max": 17
                },
                "morning": {
                    "velocity_min": 5,
                    "velocity_max": 5,
                    "velocity_avg": 5,
                    "direction_degrees": 96,
                    "direction": "E",
                    "gust_max": 7
                },
                "afternoon": {
                    "velocity_min": 3,
                    "velocity_max": 9,
                    "velocity_avg": 5,
                    "direction_degrees": 120,
                    "direction": "ESE",
                    "gust_max": 7
                },
                "night": {
                    "velocity_min": 11,
                    "velocity_max": 13,
                    "velocity_avg": 12,
                    "direction_degrees": 139,
                    "direction": "SE",
                    "gust_max": 25
                },
                "velocity_min": 3,
                "velocity_max": 13,
                "velocity_avg": 7,
                "direction_degrees": 116,
                "direction": "ESE",
                "gust_max": 25
            },
            "uv": {
                "max": 10.7
            },
            "thermal_sensation": {
                "min": 20,
                "max": 23
            },
            "text_icon": {
                "icon": {
                    "dawn": "4rn",
                    "morning": "4r",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4r"
                },
                "text": {
                    "pt": "Sol. Pancadas de chuva a qualquer hora do dia e da noite. Muitas nuvens de manhã.",
                    "en": "Sun. Mostly at any time of the day and night. Many clouds in the morning.",
                    "es": "Parcialmente Sol en cualquier momento del día y de la noche. Muchas nubes en la mañana.",
                    "phrase": {
                        "reduced": "Sol. Pancadas de chuva a qualquer hora do dia e da noite. Muitas nuvens de manhã.",
                        "morning": "Sol com muitas nuvens e chuva",
                        "afternoon": "Sol, pancadas de chuva e trovoadas",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Muitas nuvens e chuva"
                    }
                }
            },
            "temperature": {
                "min": 20,
                "max": 27,
                "dawn": {
                    "min": 21,
                    "max": 24
                },
                "morning": {
                    "min": 20,
                    "max": 21
                },
                "afternoon": {
                    "min": 22,
                    "max": 26
                },
                "night": {
                    "min": 24,
                    "max": 27
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 84,
                    "mid": 4,
                    "high": 1
                },
                "morning": {
                    "low": 89,
                    "mid": 95,
                    "high": 26
                },
                "afternoon": {
                    "low": 100,
                    "mid": 32,
                    "high": 0
                },
                "night": {
                    "low": 100,
                    "mid": 13,
                    "high": 0
                },
                "low": 93,
                "mid": 36,
                "high": 7
            },
            "sun": {
                "sunrise": "08:56:43",
                "sunset": "21:43:52"
            }
        },
        {
            "date": "2024-02-21",
            "date_br": "21/02/2024",
            "humidity": {
                "min": 63,
                "max": 87,
                "dawn": {
                    "min": 75,
                    "max": 85
                },
                "morning": {
                    "min": 86,
                    "max": 87
                },
                "afternoon": {
                    "min": 70,
                    "max": 87
                },
                "night": {
                    "min": 63,
                    "max": 69
                }
            },
            "pressure": {
                "pressure": 1006.8
            },
            "rain": {
                "precipitation": 25,
                "probability": 89
            },
            "wind": {
                "dawn": {
                    "velocity_min": 7,
                    "velocity_max": 10,
                    "velocity_avg": 8,
                    "direction_degrees": 123,
                    "direction": "ESE",
                    "gust_max": 23
                },
                "morning": {
                    "velocity_min": 7,
                    "velocity_max": 7,
                    "velocity_avg": 7,
                    "direction_degrees": 112,
                    "direction": "E",
                    "gust_max": 21
                },
                "afternoon": {
                    "velocity_min": 5,
                    "velocity_max": 9,
                    "velocity_avg": 6,
                    "direction_degrees": 123,
                    "direction": "ESE",
                    "gust_max": 12
                },
                "night": {
                    "velocity_min": 10,
                    "velocity_max": 13,
                    "velocity_avg": 11,
                    "direction_degrees": 135,
                    "direction": "SE",
                    "gust_max": 26
                },
                "velocity_min": 5,
                "velocity_max": 13,
                "velocity_avg": 8,
                "direction_degrees": 123,
                "direction": "ESE",
                "gust_max": 26
            },
            "uv": {
                "max": 5
            },
            "thermal_sensation": {
                "min": 20,
                "max": 24
            },
            "text_icon": {
                "icon": {
                    "dawn": "4n",
                    "morning": "4",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
                    "en": "Sun with some clouds. It rains fast during the day and evening.",
                    "es": "Sol con algunas nubes. Llueve ayuno durante el día y la noche.",
                    "phrase": {
                        "reduced": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
                        "morning": "Sol e Chuva",
                        "afternoon": "Sol, pancadas de chuva e trovoadas",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Pancadas de chuva"
                    }
                }
            },
            "temperature": {
                "min": 20,
                "max": 27,
                "dawn": {
                    "min": 21,
                    "max": 24
                },
                "morning": {
                    "min": 20,
                    "max": 21
                },
                "afternoon": {
                    "min": 22,
                    "max": 26
                },
                "night": {
                    "min": 25,
                    "max": 27
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 100,
                    "mid": 29,
                    "high": 0
                },
                "morning": {
                    "low": 100,
                    "mid": 16,
                    "high": 0
                },
                "afternoon": {
                    "low": 99,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 90,
                    "mid": 0,
                    "high": 0
                },
                "low": 97,
                "mid": 11,
                "high": 0
            },
            "sun": {
                "sunrise": "08:57:16",
                "sunset": "21:43:07"
            }
        },
        {
            "date": "2024-02-22",
            "date_br": "22/02/2024",
            "humidity": {
                "min": 61,
                "max": 90,
                "dawn": {
                    "min": 71,
                    "max": 85
                },
                "morning": {
                    "min": 86,
                    "max": 90
                },
                "afternoon": {
                    "min": 67,
                    "max": 90
                },
                "night": {
                    "min": 61,
                    "max": 67
                }
            },
            "pressure": {
                "pressure": 1007.7
            },
            "rain": {
                "precipitation": 20,
                "probability": 80
            },
            "wind": {
                "dawn": {
                    "velocity_min": 5,
                    "velocity_max": 9,
                    "velocity_avg": 6,
                    "direction_degrees": 96,
                    "direction": "E",
                    "gust_max": 24
                },
                "morning": {
                    "velocity_min": 4,
                    "velocity_max": 8,
                    "velocity_avg": 5,
                    "direction_degrees": 30,
                    "direction": "NNE",
                    "gust_max": 19
                },
                "afternoon": {
                    "velocity_min": 10,
                    "velocity_max": 13,
                    "velocity_avg": 11,
                    "direction_degrees": 340,
                    "direction": "NNW",
                    "gust_max": 24
                },
                "night": {
                    "velocity_min": 3,
                    "velocity_max": 11,
                    "velocity_avg": 6,
                    "direction_degrees": 185,
                    "direction": "S",
                    "gust_max": 20
                },
                "velocity_min": 3,
                "velocity_max": 13,
                "velocity_avg": 7,
                "direction_degrees": 163,
                "direction": "SSE",
                "gust_max": 24
            },
            "uv": {
                "max": 11.5
            },
            "thermal_sensation": {
                "min": 19,
                "max": 28
            },
            "text_icon": {
                "icon": {
                    "dawn": "2rn",
                    "morning": "2r",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol com muitas nuvens. Pancadas de chuva à tarde e à noite.",
                    "en": "Sun with many clouds. Showers in the afternoon and evening.",
                    "es": "Sol con muchas nubes. Duchas en la tarde y noche.",
                    "phrase": {
                        "reduced": "Sol com muitas nuvens. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com muitas nuvens",
                        "afternoon": "Sol, pancadas de chuva e trovoadas",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Sol com muitas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 19,
                "max": 29,
                "dawn": {
                    "min": 20,
                    "max": 24
                },
                "morning": {
                    "min": 19,
                    "max": 22
                },
                "afternoon": {
                    "min": 23,
                    "max": 28
                },
                "night": {
                    "min": 26,
                    "max": 29
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 88,
                    "mid": 11,
                    "high": 0
                },
                "morning": {
                    "low": 76,
                    "mid": 15,
                    "high": 0
                },
                "afternoon": {
                    "low": 95,
                    "mid": 20,
                    "high": 0
                },
                "night": {
                    "low": 98,
                    "mid": 2,
                    "high": 0
                },
                "low": 89,
                "mid": 12,
                "high": 0
            },
            "sun": {
                "sunrise": "08:57:49",
                "sunset": "21:42:20"
            }
        },
        {
            "date": "2024-02-23",
            "date_br": "23/02/2024",
            "humidity": {
                "min": 60,
                "max": 87,
                "dawn": {
                    "min": 69,
                    "max": 82
                },
                "morning": {
                    "min": 83,
                    "max": 87
                },
                "afternoon": {
                    "min": 62,
                    "max": 86
                },
                "night": {
                    "min": 60,
                    "max": 67
                }
            },
            "pressure": {
                "pressure": 1011.5
            },
            "rain": {
                "precipitation": 10,
                "probability": 79
            },
            "wind": {
                "dawn": {
                    "velocity_min": 5,
                    "velocity_max": 6,
                    "velocity_avg": 5,
                    "direction_degrees": 20,
                    "direction": "N",
                    "gust_max": 17
                },
                "morning": {
                    "velocity_min": 5,
                    "velocity_max": 9,
                    "velocity_avg": 7,
                    "direction_degrees": 121,
                    "direction": "ESE",
                    "gust_max": 24
                },
                "afternoon": {
                    "velocity_min": 9,
                    "velocity_max": 12,
                    "velocity_avg": 11,
                    "direction_degrees": 330,
                    "direction": "NW",
                    "gust_max": 26
                },
                "night": {
                    "velocity_min": 2,
                    "velocity_max": 9,
                    "velocity_avg": 5,
                    "direction_degrees": 183,
                    "direction": "S",
                    "gust_max": 18
                },
                "velocity_min": 2,
                "velocity_max": 12,
                "velocity_avg": 7,
                "direction_degrees": 163,
                "direction": "SSE",
                "gust_max": 26
            },
            "uv": {
                "max": 12.2
            },
            "thermal_sensation": {
                "min": 22,
                "max": 31
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                    "en": "Sun and increase of morning clouds. Showers in the afternoon and evening.",
                    "es": "Sol y el aumento de las nubes de la mañana. Duchas en la tarde y noche.",
                    "phrase": {
                        "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol, pancadas de chuva e trovoadas",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 19,
                "max": 32,
                "dawn": {
                    "min": 20,
                    "max": 27
                },
                "morning": {
                    "min": 19,
                    "max": 22
                },
                "afternoon": {
                    "min": 23,
                    "max": 31
                },
                "night": {
                    "min": 28,
                    "max": 32
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 85,
                    "mid": 26,
                    "high": 0
                },
                "morning": {
                    "low": 30,
                    "mid": 28,
                    "high": 0
                },
                "afternoon": {
                    "low": 62,
                    "mid": 47,
                    "high": 0
                },
                "night": {
                    "low": 85,
                    "mid": 14,
                    "high": 0
                },
                "low": 65,
                "mid": 29,
                "high": 0
            },
            "sun": {
                "sunrise": "08:58:22",
                "sunset": "21:41:33"
            }
        },
        {
            "date": "2024-02-24",
            "date_br": "24/02/2024",
            "humidity": {
                "min": 56,
                "max": 89,
                "dawn": {
                    "min": 70,
                    "max": 83
                },
                "morning": {
                    "min": 84,
                    "max": 89
                },
                "afternoon": {
                    "min": 58,
                    "max": 81
                },
                "night": {
                    "min": 56,
                    "max": 69
                }
            },
            "pressure": {
                "pressure": 1015.2
            },
            "rain": {
                "precipitation": 15,
                "probability": 71
            },
            "wind": {
                "dawn": {
                    "velocity_min": 6,
                    "velocity_max": 8,
                    "velocity_avg": 7,
                    "direction_degrees": 24,
                    "direction": "NNE",
                    "gust_max": 11
                },
                "morning": {
                    "velocity_min": 9,
                    "velocity_max": 12,
                    "velocity_avg": 10,
                    "direction_degrees": 344,
                    "direction": "NNW",
                    "gust_max": 45
                },
                "afternoon": {
                    "velocity_min": 12,
                    "velocity_max": 13,
                    "velocity_avg": 13,
                    "direction_degrees": 318,
                    "direction": "NW",
                    "gust_max": 34
                },
                "night": {
                    "velocity_min": 3,
                    "velocity_max": 13,
                    "velocity_avg": 6,
                    "direction_degrees": 315,
                    "direction": "WNW",
                    "gust_max": 21
                },
                "velocity_min": 3,
                "velocity_max": 13,
                "velocity_avg": 9,
                "direction_degrees": 250,
                "direction": "WSW",
                "gust_max": 45
            },
            "uv": {
                "max": 10.8
            },
            "thermal_sensation": {
                "min": 22,
                "max": 30
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "4t",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                    "en": "Sun and increase of morning clouds. Showers in the afternoon and evening.",
                    "es": "Sol y el aumento de las nubes de la mañana. Duchas en la tarde y noche.",
                    "phrase": {
                        "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol, pancadas de chuva e trovoadas",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 21,
                "max": 30,
                "dawn": {
                    "min": 21,
                    "max": 27
                },
                "morning": {
                    "min": 21,
                    "max": 23
                },
                "afternoon": {
                    "min": 24,
                    "max": 29
                },
                "night": {
                    "min": 27,
                    "max": 30
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 51,
                    "mid": 13,
                    "high": 0
                },
                "morning": {
                    "low": 66,
                    "mid": 18,
                    "high": 0
                },
                "afternoon": {
                    "low": 89,
                    "mid": 0,
                    "high": 0
                },
                "night": {
                    "low": 100,
                    "mid": 0,
                    "high": 15
                },
                "low": 76,
                "mid": 8,
                "high": 4
            },
            "sun": {
                "sunrise": "08:58:54",
                "sunset": "21:40:45"
            }
        },
        {
            "date": "2024-02-25",
            "date_br": "25/02/2024",
            "humidity": {
                "min": 62,
                "max": 87,
                "dawn": {
                    "min": 71,
                    "max": 85
                },
                "morning": {
                    "min": 82,
                    "max": 87
                },
                "afternoon": {
                    "min": 65,
                    "max": 80
                },
                "night": {
                    "min": 62,
                    "max": 70
                }
            },
            "pressure": {
                "pressure": 1017.6
            },
            "rain": {
                "precipitation": 3,
                "probability": 71
            },
            "wind": {
                "dawn": {
                    "velocity_min": 3,
                    "velocity_max": 5,
                    "velocity_avg": 4,
                    "direction_degrees": 40,
                    "direction": "NNE",
                    "gust_max": 4
                },
                "morning": {
                    "velocity_min": 2,
                    "velocity_max": 3,
                    "velocity_avg": 2,
                    "direction_degrees": 95,
                    "direction": "E",
                    "gust_max": 3
                },
                "afternoon": {
                    "velocity_min": 3,
                    "velocity_max": 11,
                    "velocity_avg": 7,
                    "direction_degrees": 150,
                    "direction": "SE",
                    "gust_max": 8
                },
                "night": {
                    "velocity_min": 11,
                    "velocity_max": 14,
                    "velocity_avg": 12,
                    "direction_degrees": 139,
                    "direction": "SE",
                    "gust_max": 25
                },
                "velocity_min": 2,
                "velocity_max": 14,
                "velocity_avg": 6,
                "direction_degrees": 106,
                "direction": "E",
                "gust_max": 25
            },
            "uv": {
                "max": 4.6
            },
            "thermal_sensation": {
                "min": 21,
                "max": 25
            },
            "text_icon": {
                "icon": {
                    "dawn": "2n",
                    "morning": "2",
                    "afternoon": "4",
                    "night": "4n",
                    "day": "4"
                },
                "text": {
                    "pt": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                    "en": "Sun and increase of morning clouds. Showers in the afternoon and evening.",
                    "es": "Sol y el aumento de las nubes de la mañana. Duchas en la tarde y noche.",
                    "phrase": {
                        "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol e Chuva",
                        "night": "Pancadas de chuva",
                        "dawn": "Algumas nuvens"
                    }
                }
            },
            "temperature": {
                "min": 21,
                "max": 32,
                "dawn": {
                    "min": 22,
                    "max": 26
                },
                "morning": {
                    "min": 21,
                    "max": 24
                },
                "afternoon": {
                    "min": 25,
                    "max": 31
                },
                "night": {
                    "min": 29,
                    "max": 32
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 90,
                    "mid": 0,
                    "high": 26
                },
                "morning": {
                    "low": 96,
                    "mid": 42,
                    "high": 37
                },
                "afternoon": {
                    "low": 100,
                    "mid": 56,
                    "high": 43
                },
                "night": {
                    "low": 100,
                    "mid": 38,
                    "high": 55
                },
                "low": 96,
                "mid": 34,
                "high": 40
            },
            "sun": {
                "sunrise": "08:59:25",
                "sunset": "21:39:56"
            }
        },
        {
            "date": "2024-02-26",
            "date_br": "26/02/2024",
            "humidity": {
                "min": 68,
                "max": 96,
                "dawn": {
                    "min": 73,
                    "max": 92
                },
                "morning": {
                    "min": 86,
                    "max": 96
                },
                "afternoon": {
                    "min": 70,
                    "max": 81
                },
                "night": {
                    "min": 68,
                    "max": 82
                }
            },
            "pressure": {
                "pressure": 1017.4
            },
            "rain": {
                "precipitation": 3,
                "probability": 67
            },
            "wind": {
                "dawn": {
                    "velocity_min": 4,
                    "velocity_max": 10,
                    "velocity_avg": 7,
                    "direction_degrees": 109,
                    "direction": "E",
                    "gust_max": 23
                },
                "morning": {
                    "velocity_min": 2,
                    "velocity_max": 4,
                    "velocity_avg": 3,
                    "direction_degrees": 187,
                    "direction": "S",
                    "gust_max": 17
                },
                "afternoon": {
                    "velocity_min": 5,
                    "velocity_max": 8,
                    "velocity_avg": 6,
                    "direction_degrees": 318,
                    "direction": "NW",
                    "gust_max": 9
                },
                "night": {
                    "velocity_min": 5,
                    "velocity_max": 9,
                    "velocity_avg": 6,
                    "direction_degrees": 328,
                    "direction": "NW",
                    "gust_max": 14
                },
                "velocity_min": 2,
                "velocity_max": 10,
                "velocity_avg": 6,
                "direction_degrees": 236,
                "direction": "SW",
                "gust_max": 23
            },
            "uv": {
                "max": 8.4
            },
            "thermal_sensation": {
                "min": 21,
                "max": 27
            },
            "text_icon": {
                "icon": {
                    "dawn": "4n",
                    "morning": "2",
                    "afternoon": "4",
                    "night": "4tn",
                    "day": "4t"
                },
                "text": {
                    "pt": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                    "en": "Sun and increase of morning clouds. Showers in the afternoon and evening.",
                    "es": "Sol y el aumento de las nubes de la mañana. Duchas en la tarde y noche.",
                    "phrase": {
                        "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        "morning": "Sol com algumas nuvens",
                        "afternoon": "Sol e Chuva",
                        "night": "Pancadas de chuva e trovoadas",
                        "dawn": "Pancadas de chuva"
                    }
                }
            },
            "temperature": {
                "min": 21,
                "max": 29,
                "dawn": {
                    "min": 21,
                    "max": 25
                },
                "morning": {
                    "min": 21,
                    "max": 23
                },
                "afternoon": {
                    "min": 24,
                    "max": 28
                },
                "night": {
                    "min": 25,
                    "max": 29
                }
            },
            "cloud_coverage": {
                "dawn": {
                    "low": 100,
                    "mid": 44,
                    "high": 60
                },
                "morning": {
                    "low": 100,
                    "mid": 69,
                    "high": 33
                },
                "afternoon": {
                    "low": 98,
                    "mid": 53,
                    "high": 29
                },
                "night": {
                    "low": 100,
                    "mid": 13,
                    "high": 42
                },
                "low": 100,
                "mid": 45,
                "high": 41
            },
            "sun": {
                "sunrise": "08:59:56",
                "sunset": "21:39:06"
            }
        }
    ]
}
""";
