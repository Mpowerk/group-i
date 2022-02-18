import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  currentError: any;
  ngOnInit() {
 
    this.myForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  public myForm: FormGroup;


  onSubmit() {
    console.log('reached on submit');
    console.log(this.myForm.value);

    this.authService.postUserData(this.myForm.value).subscribe((response) => {
      let data: any = { ...response };
      console.log(data.user);
      console.log(data.error);

      if (!data.error) {
        const userData = {
          user_id: data.user.user_id,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          email: data.user.email,
          phone_number: data.user.phone_number,
          password: data.user.password,
        };
        localStorage.setItem('user', JSON.stringify(userData));

        if (localStorage.getItem('user')) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.currentError = data.error;
      }
    });
  }
}