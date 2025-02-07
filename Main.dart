import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'mGoatGram',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  final List<Tweet> tweets = [
    Tweet(
      username: "John Doe",
      handle: "@johndoe",
      content: "This is a tweet from John Doe!",
      likes: 5,
      comments: 2,
    ),
    Tweet(
      username: "Jane Smith",
      handle: "@janesmith",
      content: "Loving Flutter for mobile development!",
      likes: 10,
      comments: 5,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("mGoatGram"),
        backgroundColor: Color(0xFF1DA1F2), // Twitter-like blue color
      ),
      body: ListView.builder(
        itemCount: tweets.length,
        itemBuilder: (context, index) {
          return TweetWidget(tweet: tweets[index]);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
        backgroundColor: Color(0xFF1DA1F2),
      ),
    );
  }
}

class Tweet {
  final String username;
  final String handle;
  final String content;
  final int likes;
  final int comments;

  Tweet({
    required this.username,
    required this.handle,
    required this.content,
    required this.likes,
    required this.comments,
  });
}

class TweetWidget extends StatelessWidget {
  final Tweet tweet;

  TweetWidget({required this.tweet});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 10, horizontal: 15),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      elevation: 5,
      child: Padding(
        padding: const EdgeInsets.all(15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              tweet.username,
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            Text(
              tweet.handle,
              style: TextStyle(color: Colors.grey, fontSize: 14),
            ),
            SizedBox(height: 10),
            Text(tweet.content),
            SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Icon(Icons.thumb_up, size: 20, color: Colors.blue),
                    SizedBox(width: 5),
                    Text(tweet.likes.toString()),
                  ],
                ),
                Row(
                  children: [
                    Icon(Icons.comment, size: 20, color: Colors.grey),
                    SizedBox(width: 5),
                    Text(tweet.comments.toString()),
                  ],
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
