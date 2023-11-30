import { Component, OnInit } from '@angular/core';
import { ProfileResponse } from 'src/app/models/profileresponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/service/local-storage';
import { ToastrService } from 'ngx-toastr';
import { KullaniciService } from 'src/app/service/kullanici.service';
import { Router } from '@angular/router';
import { UpdateResponse } from 'src/app/models/updateresponse';
import { SelfProfileResponse } from 'src/app/models/selfprofileresponse';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [
    
  ]
})
export class UserProfileComponent  implements OnInit{ 

constructor(

  private httpClient: HttpClient,
    
    private readonly localStorageService: LocalStorageService,
    private toastr: ToastrService,
    private kullaniciService: KullaniciService,
    private router: Router
){}
  sprofileForm = new FormGroup({
    Adi: new FormControl('',Validators.required),
    Soyadi: new FormControl('',Validators.required),
    Eposta: new FormControl('',Validators.required),
    CepTelefon: new FormControl('',Validators.required),
  })

  s2profileForm= new FormGroup({

    eskisifre: new FormControl('',Validators.required),
    yenisifre: new FormControl('',Validators.required),
    yenisifretekrar: new FormControl('',Validators.required),
  })
  

  selfProfileResult: SelfProfileResponse = new SelfProfileResponse();
  user: ProfileResponse = new ProfileResponse()

  public users: ProfileResponse[] = [];
  ngOnInit(){
      this.getProfile()
      console.log(this.loggedInUser);
  }

  getProfile() {
    this.kullaniciService.getProfile().subscribe((result) => {
      this.user = result;
      this.sprofileForm.patchValue(result)
    })
  }

  UpdateSelfProfile(){
  
    const request: UpdateResponse=Object.assign(new UpdateResponse(), this.sprofileForm.value);
    console.log(request.Adi)
    this.kullaniciService.updateSelfProfile(request).subscribe((res)=>{

      console.log(res);
    })

   

   }

   get loggedInUser() {
    return this.kullaniciService.loggedInUser;
  }

  
}
