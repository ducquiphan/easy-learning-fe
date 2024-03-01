import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../commons/app.contants';

const api = 'http://localhost:8080/api/v1';
const googleURL = AppConstants.GOOGLE_AUTH_URL;
const facebookURL = AppConstants.FACEBOOK_AUTH_URL;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  signup(body : any) {
    return this.http.post(`${api}/sign-up`, body);
  }
  // login
  login(username: string, password: string) {
    const formData = {
      'username' : username,
      'password' : password
    };
    return this.http.post(`${api}/authenticate`, formData);
  }
  logOut() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('roles');
  }
  // check account exists
  checkAccountExists(email: string) {
    return this.http.get(`${api}/check-account-exists?username=${email}`);
  }
  // check login
  checkLogin() {
    let jsonData = localStorage.getItem('auth_token');
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return false;
    }
  }
// deleteAccount
  deleteAccount(username: string) {
    return this.http.delete(`${api}/delete-account?username=${username}`);
  }
  // get user info
  getUserInfo(username: string) {
    return this.http.get(`${api}/get-account?username=${username}`);
  }

  checkUserInfo() {
    let jsonData = localStorage.getItem('userInfo');
    console.log("this.avatar" + jsonData);
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return false;
    }
  }
  checkIsAdmin(){
    let roles = localStorage.getItem('roles');
    if(roles !== undefined && roles.includes('admin')){
      return true;
    }
    return false;
  }

  setPremuim(){
    let roles = JSON.parse(localStorage.getItem('roles')) || [];
    roles.push('premium');
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  getAvatar(){
    let accountApp = this.checkUserInfo();

    if(accountApp){
      if(accountApp.userInfo.avatar != null) return accountApp.userInfo.avatar.url;
    }
    return null;
  }
}
