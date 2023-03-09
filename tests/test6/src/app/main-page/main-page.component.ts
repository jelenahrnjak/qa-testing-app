import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  lastName: string = "";

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.lastName =  this._route.snapshot.paramMap.get('lastName');
  }

}
