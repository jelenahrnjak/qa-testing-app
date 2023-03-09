import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs"; 
import { environment } from "../../environments/environment";
import { Test } from "./test.model";

const BACKEND_URL = environment.apiUrl;
const TEST_URL = environment.testUrl;

@Injectable({ providedIn: "root" })
export class TestsService{
  private tests: Test[] = [];
  private testsUpdated = new Subject<Test[]>();

  constructor(private http: HttpClient ) {}

  getTests() {
    this.http
      .get<{ message: string; tests: Test[] }>(
        BACKEND_URL +  "/tests"
      )
      .subscribe(postData => {
        this.tests = postData.tests;
        this.testsUpdated.next([...this.tests]);
      });
  }

  getTestUpdateListener() {
    return this.testsUpdated.asObservable();
  }

  // getText(name : string){

  //   var url = "http://localhost:3000/api/text/?name=" + name;
  //   this.http
  //   .get<{ message: string; data: string }>(
  //     url  //TODO: promeniti putanju
  //   )
  //   .subscribe(postData => { 
  //     console.log(postData.data)
  //     return postData.data
  //   });
  // }

  openApp(name : string){

    var url = BACKEND_URL + "/open-app/?name=" + name;
    this.http
    .get<{ message: string}>(
      url  //TODO: promeniti putanju
    )
    .subscribe(data  =>{ 
      //window.close()
    }
    );
  }

}
