import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  infoF : FormGroup = new FormGroup(
    {
      password: new FormControl(),
      fullName: new FormControl(),
      email: new FormControl(),
      avatar: new FormControl()
    }
  );
  isLogin: any;
  constructor(private loginSrv: LoginService,
              private userService : UserService) { }
  ngOnInit(): void {
    this.isLogin = this.loginSrv.checkUserInfo();
  }
//   {
//     "oldUsername": "anhdt12",
//     "userUpdate":{
//         "password": "123456789",
//         "fullName": "Tún Anh",
//         "email": "suadb2o311111@gmail.com",
//         "avatar": ""
//     }
// }
onUpdate() {
  console.log(this.infoF.value);
  const oldUsername = this.isLogin.username;
  const userUpdate = {
    password: this.infoF.get('password')?.value,
    fullName: this.infoF.get('fullName')?.value,
    email: this.infoF.get('email')?.value,
    avatar: this.infoF.get('avatar')?.value
  };
  const dataToUpdate = {
    oldUsername: oldUsername,
    userUpdate: userUpdate
  };
  console.log(oldUsername, userUpdate);
  this.userService.update(dataToUpdate).subscribe(
    (res: any) => {
      console.log(res);
      this.isLogin = this.loginSrv.checkUserInfo();
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      alert('Update success');
    },
    (err : any) => {
      console.log(err);
    }
  );
}
}
