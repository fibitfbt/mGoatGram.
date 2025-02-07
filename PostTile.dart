import 'package:flutter/material.dart';
import 'PostModel.dart';

class PostTile extends StatelessWidget {
  final PostModel post;

  PostTile({required this.post});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(10),
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              post.username,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 5),
            Text(post.content),
            SizedBox(height: 5),
            Text('Posted on: ${post.date}'),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Icon(Icons.thumb_up, size: 16),
                    SizedBox(width: 5),
                    Text(post.likes.toString()),
                  ],
                ),
                Row(
                  children: [
                    Icon(Icons.comment, size: 16),
                    SizedBox(width: 5),
                    Text(post.comments.length.toString()),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
