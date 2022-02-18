import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UpdateUserService } from 'src/app/services/update/update-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser: any;
  updateUser_Error: any;


  constructor(private formBuilder: FormBuilder, private updateUserService: UpdateUserService) { }

  ngOnInit(): void {


      this.updateUser = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required],
      })

}

onSubmit(){ 


  this.updateUserService.postUserData(1,this.updateUser.value).subscribe((response: any) => {
    let userDetails: any = { ...response };
  

    if (!userDetails.error) {
     
      const userData = {
        user_id: userDetails.user.user_id,
        speciality: userDetails.user.user_id,
        first_name: userDetails.user.first_name,
        last_name: userDetails.user.last_name,
        company_name: userDetails.user.user_id,
        address: userDetails.user.user_id,
        email: userDetails.user.email,
        phone_number: userDetails.user.phone_number,
        gender: userDetails.user.password,
      }
    }
    else {
      this.updateUser_Error = userDetails.error;
    }
  })
}

}      
