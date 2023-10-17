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
 
  this.user.KullaniciId=this.numberValue;
  this.kullaniciService.GetSingle(this.user.KullaniciId).subscribe((response: ProfileResponse ) => {this.user=response
    this.updateForm.patchValue(response)
  });
  
  
 }


 UpdateUser(){
  
  const request: UpdateResponse=Object.assign(new UpdateResponse(), this.updateForm.value);

  this.user.Eposta= request.Eposta;
  this.user.Adi= request.Adi;
  this.user.Soyadi= request.Soyadi;
  this.user.CepTelefon= request.CepTelefon;
  this.kullaniciService.updateUser(this.user).subscribe(res=>{

    console.log(res);
  })
 }

 

 
 
}