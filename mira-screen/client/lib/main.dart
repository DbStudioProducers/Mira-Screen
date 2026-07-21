import 'package:flutter/material.dart';
import 'screens/login_screen.dart';
import 'screens/home_screen.dart';
import 'screens/content_detail_screen.dart';
import 'models/content.dart';

void main() {
  runApp(const MiraScreenApp());
}

class MiraScreenApp extends StatelessWidget {
  const MiraScreenApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mira Screen',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: const Color(0xFFE50914),
        scaffoldBackgroundColor: Colors.black,
      ),
      initialRoute: '/login',
      routes: {
        '/login': (_) => const LoginScreen(),
        '/home': (_) => const HomeScreen(),
      },
      onGenerateRoute: (settings) {
        if (settings.name == '/detail') {
          final content = settings.arguments as Content;
          return MaterialPageRoute(
            builder: (_) => ContentDetailScreen(content: content),
          );
        }
        return null;
      },
    );
  }
}