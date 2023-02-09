import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserDBService } from '../user-db.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  name: string = '';
  password: string = '';
  string = 'Add User';
  constructor(
    private r: ActivatedRoute,
    private userService: UserDBService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.r.snapshot.params.id) {
      this.string = 'Update User';
      console.log(this.userService.selectedUser);
      this.name = this.userService.selectedUser.name;
      this.password = this.userService.selectedUser.password;
    }
  }
  Save() {
    if (this.r.snapshot.params.id) {
      this.UpdateUser();
    } else {
      this.AddUser();
    }
    this.router.navigateByUrl('/home');
  }
  private AddUser() {
    this.userService.addUser({ name: this.name, password: this.password });
  }
  private UpdateUser() {
    this.userService
      .updateUser(new User(this.r.snapshot.params.id, this.name, this.password))
      .subscribe((user) => console.log(user));
  }
}
