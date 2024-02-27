import 'dart:convert';

import 'package:challenge_accepted_mobile/app/shared/types/constant_values.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
      Future.delayed(
        const Duration(milliseconds: 500),
        () => _navigator(),
      );
    });
  }

  void _navigator() async {
    final sharedPreferences = await SharedPreferences.getInstance();
    String? stringShared = sharedPreferences.getString(CITYFORECASTKEY);
    if (stringShared == null || stringShared.isEmpty) {
      Navigator.pushReplacementNamed(context, '/select_city_page');
    } else {
      final map = jsonDecode(stringShared);
      Navigator.pushReplacementNamed(
        context,
        '/home_screen',
        arguments: map['id'],
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0XFF0081CB),
      body: Center(
        child: Image.asset(
          'assets/icons/icon_climatempo.png',
          height: 100,
        ),
      ),
    );
  }
}
