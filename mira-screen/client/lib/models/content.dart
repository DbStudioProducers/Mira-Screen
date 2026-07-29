class Content {
  final String id;
  final String title;
  final String type;
  final String posterUrl;
  final double rating;
  final String? description;
  final int? releaseYear;

  Content({
    required this.id,
    required this.title,
    required this.type,
    required this.posterUrl,
    required this.rating,
    this.description,
    this.releaseYear,
  });

  factory Content.fromJson(Map<String, dynamic> json) {
    return Content(
      id: json['id'],
      title: json['title'],
      type: json['type'],
      posterUrl: json['poster_url'],
      rating: (json['rating'] as num).toDouble(),
      description: json['description'],
      releaseYear: json['release_year'],
    );
  }
}