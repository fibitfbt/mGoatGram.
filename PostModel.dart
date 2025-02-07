class PostModel {
  String username;
  String content;
  String date;
  int likes;
  List<String> comments;

  PostModel({
    required this.username,
    required this.content,
    required this.date,
    required this.likes,
    required this.comments,
  });
}
