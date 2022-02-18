import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}
  rawJsonUserData: any = localStorage.getItem('user')
  user: any;

  ngOnInit(): void {
      this.user = JSON.parse(this.rawJsonUserData)
  }

  logout() {
    localStorage.removeItem('user')
  }

  


}
