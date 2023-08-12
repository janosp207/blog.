export class Comment {
  id = 0;
  date = '';
  text = '';
  name = '';
  usertag = ''
  postId = 0;
  constructor(data: Partial<Comment>) {
    this.id = data.id ?? this.id;
    this.date = data.date ?? this.date;
    this.text = data.text ?? this.text;
    this.name = data.name ?? this.name;
    this.usertag = data.usertag ?? this.usertag;
    this.postId = data.postId ?? this.postId;
  }

  get formattedDate() {
    const date = new Date(this.date);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
};