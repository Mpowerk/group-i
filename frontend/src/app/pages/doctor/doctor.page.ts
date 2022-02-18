import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}
  doctorId: any;
  currentDoctor: any = null;

  ngOnInit() {
    // GET THE CURRENT URL AND TAKE OUT THE ID
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.doctorId = id;
    console.log('current doctor is:', this.doctorId);

    //Get The current doctor information
    this.doctorService.getDoctorById(this.doctorId).subscribe((data) => {
      this.currentDoctor = data.doctor;
      console.log(this.currentDoctor);
    });
  }
}
