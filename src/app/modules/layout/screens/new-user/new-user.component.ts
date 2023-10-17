
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileResponse } from 'src/app/models/profileresponse';
import { KullaniciService } from 'src/app/service/kullanici.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  eposta: string = '';
  adi: string = '';
  soyadi: string = '';
  sifreAcik: string = '';
  cepTelefon: string = '';
  telefon: string = '';
  sicilNo: string = '';
  adres: string = '';
  searchForm = new FormGroup({
    adi: new FormControl(''),
    soyadi: new FormControl(''),
    eposta: new FormControl('')
  })
  

  user: ProfileResponse = new ProfileResponse();
  user2: ProfileResponse;

  public users: ProfileResponse[] = [];
  constructor(
  
    private toastr: ToastrService,
    private kullaniciService: KullaniciService,
    private router: Router
    
  ) { }

  getUsersFormData(data:any){
    console.log(this.adi);
    this.user.KullaniciId = 0
    this.user.KullaniciTipiId = 2

    this.kullaniciService.saveUser(this.user).subscribe((res)=>{
      console.warn(res)
      if(res.Successful)
      this.toastr.success("Başarıyla eklendi")
      
    })
  }


}
