import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { KullaniciService } from 'src/app/service/kullanici.service';
import { LocalStorageService } from 'src/app/service/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [
    
  ]
})

export class SignInComponent implements OnInit {
  constructor(
    private kullaniciService: KullaniciService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
    private toastr: ToastrService

    ){}
  ngOnInit(){
    this.initForm();
  }
  initForm(){}
  
  loginForm = new FormGroup({
    eposta: new FormControl('', [Validators.required, Validators.email]),
    sifre: new FormControl('', Validators.required),
    
  });
  login() {
    // CALL API with username and password
    if (this.loginForm.valid){
         this.kullaniciService.login(this.loginForm.value);

    }
  }
  forgotPassword(){
    this.router.navigate(['/auth/password'])
  }
}




