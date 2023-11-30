import {  Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { KullaniciService } from 'src/app/service/kullanici.service';


@Component({
  selector: 'app-home',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  
  constructor(
    private router: Router,
    private kullaniciServis: KullaniciService){}
  onProfileClick(){
    this.router.navigate(['/app/kullanicilar'])
  }

  ngOnInit() {
    console.log(this.loggedInUser);
    
  }
  
  get loggedInUser() {
    return this.kullaniciServis.loggedInUser;
  }
}


