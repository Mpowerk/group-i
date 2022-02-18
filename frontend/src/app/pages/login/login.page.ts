import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  router: any;
  currentError: any;
  authService: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.authService.login(this.myForm.value).subscribe((response) => {
      let data: any = { ...response };
      console.log(response);
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
          this.router.navigate(['/home']);
        }
      } else {
        this.currentError = data.error;
      }
    });
  }
}
