import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';
@Injectable({
  providedIn: 'root',
})
export class UserDBService {
  connectionString = 'http://localhost:3000/people';

  users: User[] = [];
  selectedUser: User = new User(0, '', '');
  constructor(private http: HttpClient) {
    this.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  getAllUsers() {
    return this.http.get<User[]>(this.connectionString);
  }
  getUserById(id: number) {
    return this.http.get<User>(`${this.connectionString}/${id}`);
  }
  addUser(user: { name: string; password: string }) {
    return this.http
      .post<User>(
        this.connectionString,
        new User(Math.round(Math.random() * 100) + 1, user.name, user.password)
      )
      .subscribe((user) => {
        this.users.push(user);
      });
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.connectionString}/${id}`);
  }
  updateUser(user: User) {
    return this.http.put(`${this.connectionString}/${user.id}`, user);
  }
}
