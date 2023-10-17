import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient,
    private router :Router) {}
	title = 'NewProject';

  ngOnInit() {

	}
  navigeteTo(route: string) {
    console.log('zaaa');
    
    this.router.navigate([route])
   }
}