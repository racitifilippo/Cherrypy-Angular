import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpClient){
    this.http.get("https://ff3e-5-172-64-20.eu.ngrok.io").subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    );
  }
}