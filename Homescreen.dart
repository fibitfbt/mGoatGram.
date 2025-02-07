import 'package:flutter/material.dart';
import 'PostModel.dart';
import 'PostTile.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<PostModel> posts = [
    PostModel(
        username: 'Ayu Syafika',
        content: 'Ini adalah tweet pertama saya!',
        date: '2025-02-07',
        likes: 0,
        comments: []),
    PostModel(
        username: 'Ahmad',
        content: 'Selamat pagi semua!',
        date: '2025-02-06',
        likes: 5,
        comments: ['Bagus!']),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('mGoatGram'),
      ),
      body: ListView.builder(
        itemCount: posts.length,
        itemBuilder: (context, index) {
          return PostTile(post: posts[index]);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add tweet logic
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
