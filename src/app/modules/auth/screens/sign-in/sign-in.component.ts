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
  
})

export class SignInComponent implements OnInit {
  constructor(
    private authService:KullaniciService,
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
         this.authService.login(this.loginForm.value).subscribe(result =>{
        if(result.Successful){
          this.toastr.success("Successfull");
          console.log(result);
          
          this.localStorageService.saveData('token', result.refreshToken)
          const token=this.localStorageService.getData('token')
          console.log(token)
          this.router.navigate(['/app/home'])
        }else{
          this.toastr.error(result.Description);
          
        }
      },
      error=>{
        console.log("error", error)
        this.toastr.error("Unsuccessfull");
      });
    }
  }
  forgotPassword(){
    this.router.navigate(['/auth/password'])
  }
}




