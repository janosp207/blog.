export class User {
  username = '';
  usertag = '';
  id = '';

  constructor(data: Partial<User>) {
    this.username = data.username ?? this.username;
    this.usertag = data.usertag ?? this.usertag;
    this.id = data.id ?? this.id;
  }
}