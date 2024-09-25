export class ConnectionEntitie {
  id: string;
  user1Id: string;
  user2Id: string;

  constructor(id: string, user1Id: string, user2Id: string) {
    this.id = id;
    this.user1Id = user1Id;
    this.user2Id = user2Id;
  }
}
