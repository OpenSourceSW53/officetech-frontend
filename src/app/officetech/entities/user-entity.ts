export class UserEntity{
  id: number;
  name: string;
  email: string;
  password: string;
  type_user: string;
  constructor(id: number, name: string, email: string, password: string, type_user: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type_user = type_user;
  }
}
