import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/content.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:3000/api/v1';

  Future<List<Content>> getTrending() async {
    final res = await http.get(Uri.parse('$baseUrl/contents/trending'));
    if (res.statusCode == 200) {
      final List data = jsonDecode(res.body);
      return data.map((e) => Content.fromJson(e)).toList();
    }
    throw Exception('Failed to load content');
  }

  Future<Content> getContent(String id) async {
    final res = await http.get(Uri.parse('$baseUrl/contents/$id'));
    if (res.statusCode == 200) {
      return Content.fromJson(jsonDecode(res.body));
    }
    throw Exception('Content not found');
  }
}