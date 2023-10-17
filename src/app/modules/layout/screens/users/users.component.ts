import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/service/local-storage';

import { ProfileResponse } from 'src/app/models/profileresponse';
import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup } from '@angular/forms';
import { getSearchResult } from 'src/app/models/getsearch-result';
import { KullaniciService } from 'src/app/service/kullanici.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  eposta: string = '';
  adi: string = '';
  soyadi: string = '';
  sifreAcik: string = '';
  cepTelefon: string = '';
  telefon: string = '';
  sicilNo: string = '';
  adres: string = '';
  page: number=0;
  tablesize : number=10;
  
  searchForm = new FormGroup({
    Adi: new FormControl(''),
    Soyadi: new FormControl(''),
    Eposta: new FormControl('')
  })
  
  
  user: ProfileResponse = new ProfileResponse();
  user2: ProfileResponse;
  

 


  public users: ProfileResponse[] = [];
  constructor(
    private httpClient: HttpClient,
    private readonly localStorageService: LocalStorageService,
    private toastr: ToastrService,
    private kullaniciService: KullaniciService,
    private router: Router
    
  ) { }

  



  get_users() { 
    this.kullaniciService.getUsers(this.page, this.tablesize)
      .subscribe((result) => {
          this.users = result.Data
      });
  }
  getUsersFormData(data:any){
    console.log('sa knk');
    
    console.log(this.adi);
    this.user.KullaniciId = 0
    this.user.KullaniciTipiId = 2

    this.kullaniciService.saveUser(this.user).subscribe((res)=>{
      console.warn(res)
      if(res.Successful)
      this.toastr.success("Başarıyla eklendi")
      
    })
  }

  

  SearchUser() {
    const ad = this.searchForm.value.Adi;
    const soyad = this.searchForm.value.Soyadi;
    
    
    this.kullaniciService.searchUser(ad, soyad,this.page,this.tablesize).subscribe((res)=>{

      this.users=res.Data;
      
    })
  }
   DeleteUser(data:any,i:number){
    if(confirm("Are you sure to delete "+ data.Adi)==true) {
      console.log("Implement delete functionality here");
      this.users.splice(i,1)
      this.kullaniciService.deleteUser(data.KullaniciId).subscribe((res)=>{
     console.log(res);
  
      })}
    

   }
   updateUser(user:any){

    this.router.navigate(['/app/update',user.KullaniciId])
   }

   onNewUserClick(){
    this.router.navigate(['/app/newuser'])
  }

  ngOnInit() {
    this.get_users();
    
   
  }
  onPageChange($event: PageEvent){
    this.page=$event.pageIndex;
    console.log($event);
    this.tablesize=$event.pageSize;
    this.SearchUser();
    this.get_users();
  }

  

  

  

  
}

