import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDrAuthenService } from 'src/app/services/adding/add-dr-authen.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private AddDrAuthenService: AddDrAuthenService) { }
  addDr_Err: any;

  public addDoctor: any;


  ngOnInit() {

    this.addDoctor = this.formBuilder.group(
      {
        speciality: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        company_name: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        phone_number: ['', Validators.required],
        gender: ['', Validators.required]
      })
  }

onSubmit(){ 
  console.log('reached on submit');
  console.log(this.addDoctor.value);

  this.AddDrAuthenService.postDoctorData(this.addDoctor.value).subscribe((response: any) => {
    let drDetails: any = { ...response };
    console.log(drDetails.user);
    console.log(drDetails.error);

    if (!drDetails.error) {
     
      const docData = {
        user_id: drDetails.user.user_id,
        speciality: drDetails.user.user_id,
        first_name: drDetails.user.first_name,
        last_name: drDetails.user.last_name,
        company_name: drDetails.user.user_id,
        address: drDetails.user.user_id,
        email: drDetails.user.email,
        phone_number: drDetails.user.phone_number,
        gender: drDetails.user.password,
      }
      localStorage.setItem('doctor', JSON.stringify(docData));

      if (localStorage.getItem('doctor')) {
        this.router.navigate(['/viewDoctor']);
      }
    }
    else {
      this.addDr_Err = drDetails.error;
    }
  })
}

}