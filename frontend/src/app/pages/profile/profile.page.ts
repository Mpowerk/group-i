import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  updateForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private profileService:DoctorService) { }

  ngOnInit() {

    let rawJsonData: any = localStorage.getItem('user');
    this.currentUser = JSON.parse(rawJsonData);

    this.updateForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  update()
  {
    // this.profileService.updateUser(this.updateForm.value);
  }
  currentUser: any;

 
}
