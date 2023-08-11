export enum PostFormat {
  HALF = 0,
  FULL = 1,
}

export class Post {
  id = 0;
  date = '';
  format = PostFormat.HALF;
  title = '';
  shortText = '';
  text: string[] = [];
  tags: string[] = [];

  constructor(data: Partial<Post>) {
    this.id = data.id ?? this.id;
    this.date = data.date ?? this.date;
    this.format = data.format ?? this.format;
    this.title = data.title ?? this.title;
    this.shortText = data.shortText ?? this.shortText;
    this.text = data.text ?? this.text;
    this.tags = data.tags ?? this.tags;
  }
}