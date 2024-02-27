class ForecastDataModel {
  final String date;
  final String dateBr;
  final Map humidity;
  final Map pressure;
  final Map rain;
  final Map wind;
  final Map uv;
  final Map thermalSensation;
  final Map textIcon;
  final Map temperature;
  final Map cloudCoverage;
  final Map sun;

  ForecastDataModel({
    required this.date,
    required this.dateBr,
    required this.humidity,
    required this.pressure,
    required this.rain,
    required this.wind,
    required this.uv,
    required this.thermalSensation,
    required this.textIcon,
    required this.temperature,
    required this.cloudCoverage,
    required this.sun,
  });
}

/*
 data: [
        {
            date: "2021-02-22",
            date_br: "22/02/2021",
            humidity: {
                min: 47,
                max: 84,
                dawn: {
                    min: 79,
                    max: 82
                },
                morning: {
                    min: 56,
                    max: 84
                },
                afternoon: {
                    min: 47,
                    max: 60
                },
                night: {
                    min: 65,
                    max: 75
                }
            },
            pressure: {
                pressure: 920.5
            },
            rain: {
                probability: 90,
                precipitation: 5
            },
            wind: {
                velocity_min: 12,
                velocity_max: 21,
                velocity_avg: 17,
                gust_max: 33,
                direction_degrees: 123,
                direction: "ESE",
                dawn: {
                    direction: "ESE",
                    direction_degrees: 123,
                    gust_max: 33,
                    velocity_max: 21,
                    velocity_avg: 20
                },
                morning: {
                    direction: "E",
                    direction_degrees: 107,
                    gust_max: 29,
                    velocity_max: 17,
                    velocity_avg: 16
                },
                afternoon: {
                    direction: "ESE",
                    direction_degrees: 124,
                    gust_max: 22,
                    velocity_max: 16,
                    velocity_avg: 14
                },
                night: {
                    direction: "SE",
                    direction_degrees: 137,
                    gust_max: 28,
                    velocity_max: 21,
                    velocity_avg: 19
                }
            },
            uv: {
                max: 15
            },
            thermal_sensation: {
                min: 19,
                max: 32
            },
            text_icon: {
                icon: {
                    dawn: "2n",
                    morning: "2",
                    afternoon: "4t",
                    night: "4tn",
                    day: "4t"
                },
                text: {
                    pt: "Sol, pancadas de chuva e trovoadas.",
                    en: "Sun, rainfalls and thunderstorms",
                    es: "Sol, lluvia y tormentas",
                    phrase: {
                        reduced: "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                        morning: "Sol com algumas nuvens",
                        afternoon: "Sol, pancadas de chuva e trovoadas.",
                        night: "Muitas nuvens, chuva e raios",
                        dawn: "Algumas nuvens"
                    }
                }
            },
            temperature: {
                min: 19,
                max: 29,
                dawn: {
                    min: 20,
                    max: 22
                },
                morning: {
                    min: 19,
                    max: 21
                },
                afternoon: {
                    min: 22,
                    max: 28
                },
                night: {
                    min: 20,
                    max: 29
                }
            },
            cloud_coverage: {
                low: 25.8,
                mid: 0,
                high: 0,
                dawn: {
                    low: 53.8,
                    mid: 0,
                    high: 0
                },
                morning: {
                    low: 11,
                    mid: 0,
                    high: 0
                },
                afternoon: {
                    low: 9.2,
                    mid: 0,
                    high: 0
                },
                night: {
                    low: 29.3,
                    mid: 0,
                    high: 0
                }
            },
            sun: {
                sunrise: "05:59:00",
                sunset: "18:41:00"
            }
        },
        ...
    ]
*/