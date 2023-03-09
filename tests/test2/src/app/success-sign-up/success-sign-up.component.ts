import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-sign-up',
  templateUrl: './success-sign-up.component.html',
  styleUrls: ['./success-sign-up.component.css']
})
export class SuccessSignUpComponent implements OnInit {

  name: any;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name");
    console.log(this.name)
  }

}
