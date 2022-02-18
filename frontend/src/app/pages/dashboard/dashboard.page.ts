import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private doctorService: DoctorService, private router: Router) {}

  doctors: any[];

  ngOnInit() {
    // GET ALL DOCTORS
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctors = data.doctors;
    });
  }

  showDoctorDetails(doctor: any) {
    this.router.navigate(['/doctor', doctor.user_id]);
  }
}
