import { HttpClient } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';

import { Test } from './test.model';
import { TestsService } from './tests.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tests: Test[] = [];
  private testsSub: Subscription | undefined;
  allTests = new FormControl();
  activeTest : Test | undefined;
  http : HttpClient | undefined;
  isClicked : boolean = false;

  constructor(public testsService : TestsService) { }

  ngOnInit(): void {
    this.testsService.getTests();
    this.testsSub = this.testsService.getTestUpdateListener()
      .subscribe((tests: Test[]) => {
        this.tests = tests;
      });

      this.allTests.valueChanges.subscribe(test => {
        this.activeTest = test;  
      });
 
  }

  onClick(){ 
    if(this.activeTest){ 
      this.isClicked = true;
      this.testsService.openApp(this.activeTest.title)}
  }

  ngOnDestroy() {
    if(this.testsSub){
      this.testsSub.unsubscribe();
    }
  }  

}
