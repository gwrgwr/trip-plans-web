import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserEntitie} from "../entities/user-entitie";
import {UserSigninRequest} from "../models/user-signin-request";
import {Observable} from "rxjs";
import {UserSignupRequest} from "../models/user-signup-request";
import {UserUpdateRequest} from "../models/user-update-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private user!: UserEntitie;
  signInUser(userSignInRequest: UserSigninRequest): Observable<UserEntitie> {
    const user = this.httpClient.post<UserEntitie>("http://localhost:3000/auth", {
      email: userSignInRequest.email,
      password: userSignInRequest.password
    });
    if(user) {
      return user;
    }
    throw new Error("User not found");
  }

  signUpUser(userSignUpRequest: UserSignupRequest): Observable<UserEntitie> {
    const newUser = this.httpClient.post<UserEntitie>("http://localhost:3000/user", {
      name: userSignUpRequest.name,
      email: userSignUpRequest.email,
      password: userSignUpRequest.password
    });
    if(newUser) {
      return newUser;
    }
    throw new Error("User not created");
  }

  getUserById(id: string): Observable<UserEntitie> {
    const user = this.httpClient.get<UserEntitie>(`http://localhost:3000/user/id/${id}`);
    if(user) {
      return user;
    }
    throw new Error("User not found");
  }

  getUserByEmail(email: string): UserEntitie {
    const user = this.httpClient.get<UserEntitie>(`http://localhost:3000/user/email/${email}`);
    user.subscribe({
      next: (value) => {
        this.user = value;
      },
      error: (error) => {
        throw new Error("User not found");
      }
    })
    return this.user;
  }

  updateUser(userUpdateRequest: UserUpdateRequest): Observable<UserEntitie> {
    const user = this.getUserByEmail(userUpdateRequest.email);
    const updatedUser = this.httpClient.put<UserEntitie>(`http://localhost:3000/user/${user.id}`, userUpdateRequest);
    if(updatedUser) {
      return updatedUser;
    }
    throw new Error("User not updated");
  }

  deleteUser(id: string): Observable<UserEntitie> {
    const user = this.httpClient.delete<UserEntitie>(`http://localhost:3000/user/${id}`);
    if(user) {
      return user;
    }
    throw new Error("User not deleted");
  }
}
