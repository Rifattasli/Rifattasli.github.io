import {  Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent{
  constructor(
    private router: Router){}
  onProfileClick(){
    this.router.navigate(['/app/kullanicilar'])
  }

 
  
}


