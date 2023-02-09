import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserDBService } from '../user-db.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  constructor(private userService: UserDBService, private router: Router) {}
  ngOnDestroy(): void {
    console.log('Destored');
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
    console.log('Created');
  }
  Update(id: number) {
    this.userService.getUserById(id).subscribe((user) => {
      this.userService.selectedUser = user;
      this.router.navigateByUrl(`/editUser/${id}`);
    });
  }
  Delete(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      this.users = this.users.filter((user) => user.id != id);
    });
  }
  addUser() {
    this.router.navigateByUrl('/addUser');
  }
}
