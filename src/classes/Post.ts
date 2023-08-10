export class Post {
  id = 0;
  date = '';
  title = '';
  shortText = '';
  text = '';
  tags = [];

  constructor(data: Partial<Post>) {
    this.id = data.id ?? this.id;
    this.date = data.date ?? this.date;
    this.title = data.title ?? this.title;
    this.shortText = data.shortText ?? this.shortText;
    this.text = data.text ?? this.text;
    this.tags = data.tags ?? this.tags;
  }
}