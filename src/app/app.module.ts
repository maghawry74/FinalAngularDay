import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from 'src/app/Components/add/add.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDBService } from './Components/user-db.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavbarComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserDBService],
  bootstrap: [AppComponent],
})
export class AppModule {}
