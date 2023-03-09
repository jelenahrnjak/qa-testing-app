import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.scss']
})
export class RegisteredUserComponent implements OnInit {

  firstName: string = '';
  routeState: any;

  constructor(private router: Router) 
  { 
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        this.firstName = this.routeState.firstName ? this.routeState.firstName : '';
      }
    }
  }

  ngOnInit(): void {
  }

}
