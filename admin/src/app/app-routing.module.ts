import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './Crud/add-doctor/add-doctor.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { UpdateDocComponent } from './Crud/update-doc/update-doc.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UpdateUserComponent } from './Crud/update-user/update-user.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "addDoctor", component: AddDoctorComponent},
  {path: "viewUsers", component: UsersComponent},
  {path: "viewDoctors", component: DoctorsComponent},
  {path: "updateDoctor", component: UpdateDocComponent},
  {path: "adminProfile", component: AdminProfileComponent},
  {path: "updateUsers", component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
