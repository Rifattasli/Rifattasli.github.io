import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateResponse } from 'src/app/models/updateresponse';
import { ProfileResponse } from 'src/app/models/profileresponse';
import { KullaniciService } from 'src/app/service/kullanici.service';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})


export class UpdateUsersComponent implements OnInit {
  numberValue: any;
  stringValue: any;
  a: any;
  updateForm = new FormGroup({
    AdSoyad: new FormControl('', Validators.required),
    Adi: new FormControl('', Validators.required),
    Soyadi: new FormControl('', Validators.required),
    CepTelefon: new FormControl('', Validators.required),
    Eposta: new FormControl('', Validators.required)

    
  });
  
  public users: UpdateResponse[] = [];
  user: ProfileResponse = new ProfileResponse();

constructor(
  private route: ActivatedRoute,
  private kullaniciService: KullaniciService,
  
  
  
  ) { }
 ngOnInit(){
  
  var a = this.route.snapshot.paramMap.get('id');
  this.numberValue = Number(a);
 
  this.user.id=this.numberValue;
  this.kullaniciService.GetSingle(this.user.id).subscribe((response: ProfileResponse ) => {this.user=response
    this.updateForm.patchValue(response)
    
  });
  
  
 }


 UpdateUser(value:any){
  
  const request: UpdateResponse=Object.assign(new UpdateResponse(), this.updateForm.value);
let body={
  Eposta: request.Eposta,
  Adi: request.Adi,
  Soyadi: request.Soyadi,
  AdSoyad: request.Adi+ request.Soyadi ,
  CepTelefon: request.CepTelefon,
}
this.kullaniciService.updateUser(body,this.user.id)
.subscribe(response => {
  console.log(response)
})
  
 }

 

 
 
}