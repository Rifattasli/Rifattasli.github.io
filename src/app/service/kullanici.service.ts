import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagingResult } from 'src/app/models/paging-result';
import { ProfileResponse } from '../models/profileresponse';
import { getSearchResult } from '../models/getsearch-result';
import { Dresult } from '../models/d-result';
import { ForgotPasswordDto } from '../models/forgotpasswordresponse';
import { UpdateResponse } from '../models/updateresponse';
import { LoginResponse } from '../models/loginresponse';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class KullaniciService {
  public baseApi ='http://localhost:3000/kullanicilar';
  loggedInUser: any;
  constructor(private http:HttpClient,
    private router: Router) {}
  
  searchUser(data: any, data2: any, data3: any, data4:any): Observable<PagingResult<ProfileResponse>> {
    
   // return this.http.get<PagingResult<ProfileResponse>>("https://dfsrv.larinsoft.com/Kullanici?Adi="+data+"&Soyadi="+data2+"&SayfaNo="+data3+"&SayfaBasinaKayitSayisi=" + data4);
   return this.http.get<PagingResult<ProfileResponse>>(this.baseApi);
  }

  forgotPassword(data:any):Observable<Dresult>{
    return this.http.post<Dresult>(this.baseApi,data);
  }

  saveUser(data:any):Observable<ProfileResponse>{
    return this.http.post<ProfileResponse>(this.baseApi,data)
  }
  deleteUser(id: number):Observable<ProfileResponse>{

    const url = `${this.baseApi}/${id}`
    return this.http.delete<ProfileResponse>(url);
  }

  updateUser(data:any, id: number):Observable<UpdateResponse>{
    return this.http.post<UpdateResponse>(`${this.baseApi}/update/${id}`, data)
  }

  GetSingle(id: number) {
    return this.http.get<ProfileResponse>(this.baseApi + '/'+ id);
  }

  updateSelfProfile(data : any):Observable<Dresult>{
    return this.http.post<Dresult>(this.baseApi,data);
  }

  updatePassword(data:any):Observable<Dresult>{
    return this.http.post<Dresult>(this.baseApi,data);
  }

  getProfile():Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(this.baseApi);

  }//adsadsada
  login(data:any): any{
    this.http.get<any>(this.baseApi).subscribe(res => {
      const user = res.find((a: any) => {
        return a.Eposta === data.eposta && a.Sifre === data.sifre
      })
      
      if(user !== undefined) {
        this.router.navigate(['app/home']);
        this.loggedInUser = user;
        console.log("logged in", this.loggedInUser);
        
      }
    });
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }
  
  getUsers(data : number,data4:number):Observable<ProfileResponse[]>{
    

    return this.http.get<ProfileResponse[]>(this.baseApi);
  }
}

 