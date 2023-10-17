import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagingResult } from 'src/app/models/paging-result';
import { ProfileResponse } from '../models/profileresponse';
import { getSearchResult } from '../models/getsearch-result';
import { Dresult } from '../models/d-result';
import { ForgotPasswordDto } from '../models/forgotpasswordresponse';
import { UpdateResponse } from '../models/updateresponse';
import { LoginResponse } from '../models/loginresponse';


@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http:HttpClient) { }
  
  searchUser(data: any, data2: any, data3: any, data4:any): Observable<PagingResult<ProfileResponse>> {
    
    return this.http.get<PagingResult<ProfileResponse>>("https://dfsrv.larinsoft.com/Kullanici?Adi="+data+"&Soyadi="+data2+"&SayfaNo="+data3+"&SayfaBasinaKayitSayisi=" + data4);
  }

  forgotPassword(data:any):Observable<Dresult>{
    return this.http.post<Dresult>('https://dfsrv.larinsoft.com/Kullanici/forgot-password',data);
  }

  saveUser(data:any):Observable<Dresult>{
    return this.http.post<Dresult>('https://dfsrv.larinsoft.com/Kullanici',data)
  }
  deleteUser(id: number):Observable<Dresult>{
    return this.http.delete<Dresult>("https://dfsrv.larinsoft.com/Kullanici/"+ id);
  }

  updateUser(data:any):Observable<Dresult>{
    return this.http.post<Dresult>('https://dfsrv.larinsoft.com/Kullanici',data)
  }

  GetSingle(id: number) {
    return this.http.get<ProfileResponse>("https://dfsrv.larinsoft.com/kullanici/" + id);
  }

  updateSelfProfile(data : any):Observable<Dresult>{
    return this.http.post<Dresult>("https://dfsrv.larinsoft.com/Kullanici/kisiselbilgidegistir",data);
  }

  updatePassword(data:any):Observable<Dresult>{
    return this.http.post<Dresult>('https://dfsrv.larinsoft.com/Kullanici/Sifredegistir',data);
  }

  getProfile() {
    return this.http.get<ProfileResponse>('https://dfsrv.larinsoft.com/Kullanici/userget');

  }
  login(data:any):Observable<LoginResponse>{
    
    return this.http.post<LoginResponse>('https://dfsrv.larinsoft.com/Kullanici/login',data);
  }

  getUsers(data : number,data4:number):Observable<PagingResult<ProfileResponse>>{
    

    return this.http.get<PagingResult<ProfileResponse>>('https://dfsrv.larinsoft.com/Kullanici?SayfaNo='+ data+ '&SayfaBasinaKayitSayisi=' + data4,   {

    });
  }
}

 