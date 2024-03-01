import { flatMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { UserService } from 'src/app/services/userService/user.service';
import { ResponseObjectModule } from 'src/app/models/response-object/response-object.module';
import { UserModule } from 'src/app/models/user/user.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  loginForm!: FormGroup;
  isAccountExisted: boolean = false;
  inCorrectPass: boolean = false;
  accountNotExist: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginSrv: LoginService,
    private socialAuthService: SocialAuthService,
    private userService:UserService) {
  }
  loginF: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  );
  signupF: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    }
  );
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
      this.checkAccountAndProceed(user);
    });
  }
  checkAccountAndProceed(user: SocialUser): void {
    this.loginSrv.checkAccountExists(user.email).subscribe(
      (res: any) => {
        if (res.data) {
          this.loginSrv.login(user.email, user.id).subscribe(
            (res: any) => {
              console.log("res ::", res);
              localStorage.setItem('auth_token', JSON.stringify(res.data.token));
              // localStorage.setItem('roles', JSON.stringify(res.data.roles));
              location.assign('/');
            },
            (error: any) => {
              console.error(error);
            }
          );
        } else {
          this.signupWithSocial(user);
        }
      },
      (error: any) => {
        console.error('Error checking account existence:', error);
      }
    );
  }
  

  // onSignup
  onSignup(): void {
    if (this.signupF.invalid) { return; }
    this.loginSrv.signup(this.signupF.value).pipe(
      flatMap((res: any) => {
        alert('Sign up success');
        let jsonData = JSON.stringify(res.data.token);
        localStorage.setItem('auth_token', jsonData);
        return this.loginSrv.getUserInfo(this.signupF.value.username);
      })
    ).subscribe(
      (userInfoRes: any) => {
        this.setDataUser(userInfoRes);
        location.assign('/');
      },
      (error: any) => {
        this.isAccountExisted = true;
      }
    );
  }
  //  onLogin
  onLogin(): void {
    if (this.loginF.invalid) { return; }
    const { username, password } = this.loginF.value;
  
    this.loginSrv.login(username, password).pipe(
      flatMap((authRes: any) => {
        if(authRes.status == 200){
          localStorage.setItem('auth_token', JSON.stringify(authRes.data.token));
        }else if(authRes.status == 401){
          this.inCorrectPass = true;
          this.accountNotExist = false;
        }else if(authRes.status == 500){
          this.accountNotExist = true;
        }else{ //404
          console.log("authRes ::", authRes.message);
        }
        return this.loginSrv.getUserInfo(username);
      })
    ).subscribe(
      (userInfoRes: any) => {
        this.setDataUser(userInfoRes);
        location.assign('/');
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  setDataUser(userInfo: any) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
    let roles = userInfo.data.roles.map((role: any) => role.name);
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signupWithSocial(user: any): void {
    const signupData = this.prepareSignupData(user);
    this.loginSrv.signup(signupData).subscribe(
      (res: any) => {
        let token = res.data.token;
        let jsonData = JSON.stringify(token);
        localStorage.setItem('auth_token', jsonData);
        location.assign('/');
      },
      (error: any) => {
        alert(error.error.message);
      }
    );
  }
  prepareSignupData(user: any): any {
    const signupData = {
      username: user.email,
      password: user.id,
      fullName: user.name,
      email: user.email,
      provider: "GOOGLE",
      avatar: user.publicUrl
    };
    return signupData;
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
//@abacritt/angularx-social-login
