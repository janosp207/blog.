export class Comment {
  id = 0;
  date = '';
  text = '';
  author = '';
  authorTag = ''
  postId = 0;
  constructor(data: Partial<Comment>) {
    this.id = data.id ?? this.id;
    this.date = data.date ?? this.date;
    this.text = data.text ?? this.text;
    this.author = data.author ?? this.author;
    this.authorTag = data.authorTag ?? this.authorTag;
    this.postId = data.postId ?? this.postId;
  }
};