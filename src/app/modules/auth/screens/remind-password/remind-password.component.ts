import { HttpErrorResponse } from '@angular/common/http';
import { ForgotPasswordDto } from 'src/app/models/forgotpasswordresponse';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { KullaniciService } from 'src/app/service/kullanici.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.css']
})
export class RemindPasswordComponent implements OnInit {
  
  
  
  constructor(
    private kullaniciService: KullaniciService,
    private toastr: ToastrService,
    private readonly router: Router,
    
    ) {}
  
  ngOnInit(){
    this.initForm();
  }
  initForm(){}
    forgotPasswordForm = new FormGroup({
    eposta: new FormControl('', [Validators.required, Validators.email])
  })





forgot(){
  if (this.forgotPasswordForm.valid){
  this.kullaniciService.forgotPassword(this.forgotPasswordForm.value).subscribe(result =>{
 if(result.Successful){
   this.toastr.success("Password sent to your e-mail");
   console.log(result);
   
   this.router.navigate(['/auth/sign-in'])
 }else{
   this.toastr.error(result.Description);
   
 }
},
error=>{
 console.log("error", error)
 this.toastr.error("Unsuccessfull");
});
}}

  











  
  
}