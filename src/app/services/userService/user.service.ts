import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from 'src/app/interface/account';
import { ApiResponse } from 'src/app/interface/api-response';
import { Page } from 'src/app/interface/page';
import { ResponseObjectModule } from 'src/app/models/response-object/response-object.module';
import { UserModule } from 'src/app/models/user/user.module';

const host = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) {}

  private _userProducer = new BehaviorSubject<UserModule[]>([]);
  users$ = this._userProducer.asObservable();
  userLogin = new UserModule();

  getUserByKeyword(keyword:string) : void {
    this.http.get(`${host}/userInfo/search?keyword=${keyword}`).subscribe(resp => {
      this._userProducer.next((resp as ResponseObjectModule).data); 
    });
  }

  accounts$ = (username: string = '', page: number = 0, size: number = 5) : Observable<ApiResponse<Page<Account>>> =>
    this.http.get<ApiResponse<Page<Account>>>(`${host}/admin/m-account/all?username=${username}&page=${page}&size=${size}`);

  update(body : any) {
    return this.http.post(`${host}/update-account`, body);
  }

  getUserByToken():Observable<Object>{
    var token = localStorage.getItem('auth_token');
    if(token){
      return this.http.get(`${host}/userInfo/get-user-by-token`);
    }

    return null;
  }
}
