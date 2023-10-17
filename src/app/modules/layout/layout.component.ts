import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private readonly router: Router) {}
  navigeteTo(route: string) {
    
    this.router.navigate([route])
   }
}
