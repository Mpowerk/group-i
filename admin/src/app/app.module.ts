import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './Crud/add-doctor/add-doctor.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { UpdateDocComponent } from './Crud/update-doc/update-doc.component';
import { UpdateUserComponent } from './Crud/update-user/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    HomeComponent,
    UsersComponent,
    DoctorsComponent,
    UpdateDocComponent,
    UpdateUserComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
