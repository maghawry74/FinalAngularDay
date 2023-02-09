import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: UserListComponent },
  { path: 'addUser', component: AddComponent },
  { path: 'editUser/:id', component: AddComponent },
  // { path: 'userDetails', component: AddComponent },
  // { path: '**', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
