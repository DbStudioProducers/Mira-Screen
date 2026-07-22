import 'package:flutter/material.dart';
import '../services/api_service.dart';
import '../models/content.dart';
import '../widgets/content_row.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Content> trending = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadContent();
  }

  Future<void> _loadContent() async {
    try {
      final data = await ApiService().getTrending();
      setState(() {
        trending = data;
        isLoading = false;
      });
    } catch (_) {
      setState(() => isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mira Screen'),
        backgroundColor: Colors.black,
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.search)),
          IconButton(onPressed: () => Navigator.pushReplacementNamed(context, '/login'), icon: const Icon(Icons.logout)),
        ],
      ),
      body: isLoading
          ? const Center(child: CircularProgressIndicator(color: Colors.red))
          : SingleChildScrollView(
              child: Column(
                children: [
                  ContentRow(
                    title: 'Em Alta',
                    contents: trending,
                    onTap: (content) => Navigator.pushNamed(context, '/detail', arguments: content),
                  ),
                  ContentRow(
                    title: 'Séries Populares',
                    contents: trending,
                    onTap: (content) => Navigator.pushNamed(context, '/detail', arguments: content),
                  ),
                  const SizedBox(height: 40),
                ],
              ),
            ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.black,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Início'),
          BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explorar'),
          BottomNavigationBarItem(icon: Icon(Icons.download), label: 'Downloads'),
        ],
      ),
    );
  }
}