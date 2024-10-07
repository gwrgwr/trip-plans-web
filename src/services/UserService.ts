import {UserEntitie} from "../entities/UserEntitie.ts";
import {CreateUserRequestModel} from "../model/CreateUserRequestModel.ts";
import {LoginUserRequestModel} from "../model/LoginUserRequestModel.ts";

export class UserService {
  public async createUser(createUserRequestModel: CreateUserRequestModel): Promise<UserEntitie> {
    const request = new Request('http://localhost:8080/api/user/v1', {
      method: 'POST',
      body: JSON.stringify(createUserRequestModel),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    const response = await fetch(request);
    const data = await response.json();
    const userEntitie = new UserEntitie(data.userId, data.name, data.email);
    localStorage.setItem('user', JSON.stringify(userEntitie));
    return userEntitie;
  }

  public async logInUser(logInUserRequestModel: LoginUserRequestModel): Promise<UserEntitie> {
    const request = new Request('http://localhost:8080/api/user/v1/login', {
      method: 'POST',
      body: JSON.stringify(logInUserRequestModel),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    const response = await fetch(request);
    const data = await response.json();
    const userEntitie = new UserEntitie(data.userId, data.name, data.email);
    localStorage.setItem('user', JSON.stringify(userEntitie));
    return userEntitie;
  }
}
