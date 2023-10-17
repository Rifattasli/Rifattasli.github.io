import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelfProfileResponse } from 'src/app/models/selfprofileresponse';
import { KullaniciService } from 'src/app/service/kullanici.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(
      private toastr: ToastrService,
      private kullaniciService: KullaniciService,
      private router: Router
  ){}

  s2profileForm= new FormGroup({

    eskisifre: new FormControl('',Validators.required),
    yenisifre: new FormControl('',Validators.required),
    yenisifretekrar: new FormControl('',Validators.required),
  })
  

  selfProfileResult: SelfProfileResponse = new SelfProfileResponse();

  UpdatePassword(){

    const request: SelfProfileResponse=Object.assign(new SelfProfileResponse(), this.s2profileForm.value);
    this.selfProfileResult.EskiSifre=request.YeniSifre;
    this.kullaniciService.updatePassword(request).subscribe((res)=>{
      console.log(res);
    })
   }

}
