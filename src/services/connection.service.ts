import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserEntitie} from "../entities/user-entitie";
import {ConnectionEntitie} from "../entities/connection-entitie";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  constructor(private httpClient: HttpClient) {}
  private code!: string;
  private createdConnection!: ConnectionEntitie;
  private connection!: ConnectionEntitie;
  private connectionList!: ConnectionEntitie[];
  generateCode(id: string): string {
    const code = this.httpClient.post<UserEntitie>(`http://localhost:3000/http://localhost:3000/user/code/${id}`, {});
    code.subscribe({
      next: (value) => {
        this.code = value.code;
      },
      error: (error) => {
        throw new Error("Code not generated");
      }
    })
    return this.code;
  }

  createConnection(id: string, code: string): void {
    const connection = this.httpClient.post<ConnectionEntitie>("http://localhost:3000/connection", {
      id: id,
      code: code
    });
    connection.subscribe({
      next: (value) => {
        this.createdConnection = value
      },
      error: (error) => {
        throw new Error("Connection not created");
      }
    })
  }

  getAllConnectionsFromUserId(id: string): ConnectionEntitie[] {
    const connections = this.httpClient.get<ConnectionEntitie[]>(`http://localhost:3000/connection/user-connections/${id}`);
    connections.subscribe({
      next: (value) => {
        this.connectionList = value;
      },
      error: (error) => {
        throw new Error("Connection not found");
      }
    })
    return this.connectionList;
  }

  getConnectionById(id: string): ConnectionEntitie {
    const connection = this.httpClient.get<ConnectionEntitie>(`http://localhost:3000/connection/connection/${id}`);
    connection.subscribe({
      next: (value) => {
        this.connection = value;
      },
      error: (error) => {
        throw new Error("Connection not found");
      }
    })
    return this.connection;
  }
}
