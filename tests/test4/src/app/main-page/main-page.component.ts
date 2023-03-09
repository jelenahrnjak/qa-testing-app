import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  firstName: string = '';
  ngOnInit(): void {
    //console.log(localStorage.getItem('user'))
    let a = localStorage.getItem('user')
    if(typeof(a) == 'string'){
      this.firstName = a
    }
  }

}
