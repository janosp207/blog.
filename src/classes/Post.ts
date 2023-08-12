export enum PostFormat {
  HALF = 0,
  FULL = 1,
}

export class Post {
  id = 0;
  name = '';
  usertag = '';
  date = '';
  format = PostFormat.HALF;
  title = '';
  shorttext = '';
  text: string[] = [];
  tags: string[] = [];

  constructor(data: Partial<Post>) {
    this.id = data.id ?? this.id;
    this.name = data.name ?? this.name;
    this.usertag = data.usertag ?? this.usertag;
    this.date = data.date ?? this.date;
    this.format = data.format ?? this.format;
    this.title = data.title ?? this.title;
    this.shorttext = data.shorttext ?? this.shorttext;
    this.text = data.text ?? this.text;
    this.tags = data.tags ?? this.tags;
  }

  get formattedDate() {
    const date = new Date(this.date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}