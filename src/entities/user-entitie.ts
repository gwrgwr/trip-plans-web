export class UserEntitie {
  id: string;
  name: string;
  email: string;
  code: string;
  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email
    this.code = '';
  }
}
