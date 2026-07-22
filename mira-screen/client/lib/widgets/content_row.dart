import 'package:flutter/material.dart';
import '../models/content.dart';

class ContentRow extends StatelessWidget {
  final String title;
  final List<Content> contents;
  final Function(Content)? onTap;

  const ContentRow({
    super.key,
    required this.title,
    required this.contents,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 24, 16, 12),
          child: Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        ),
        SizedBox(
          height: 180,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: contents.length,
            itemBuilder: (context, index) {
              final content = contents[index];
              return GestureDetector(
                onTap: () => onTap?.call(content),
                child: Container(
                  width: 120,
                  margin: const EdgeInsets.only(left: 16),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8),
                    image: DecorationImage(
                      image: NetworkImage(content.posterUrl),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}