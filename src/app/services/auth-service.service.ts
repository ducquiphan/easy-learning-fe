import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private socialUser: SocialUser | null = null;

  googleLoginOptions = {
    scope: 'profile email'
  };

  constructor(private authService: SocialAuthService, private http: HttpClient) {
    this.authService.initState.subscribe(() => {
      console.log('SocialAuthService initialized');
    });
   }

  loginWithGoogle(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.socialUser = user;
        // Gửi access token đến backend
        // this.sendAccessTokenToBackend(user.authToken);
        console.log('Okkk :', user);
      })
      .catch((error) => {
        console.error('FB login failed:', error);
      });
  }

  private sendAccessTokenToBackend(accessToken: string): void {
    // Gửi access token đến backend
    this.http.post('http://localhost:8080/oauth2/authorization/google', { accessToken })
      .subscribe(
        (response) => {
          console.log('Data:', response);
        },
        (error) => {
          console.error('Failed to send access token to backend:', error);
        }
      );
  }
}
