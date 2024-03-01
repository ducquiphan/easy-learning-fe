import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/userService/user.service';
import { NavigationExtras, Router } from '@angular/router'; 
import { LessonService } from 'src/app/services/lesson.service';
import { QuizService } from 'src/app/services/quizService/quiz.service';
import { ResponseObjectModule } from 'src/app/models/response-object/response-object.module';
import { UserModule } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: any;
  isAdmin: boolean = false;
  avatar: any;
  keyword="";

  constructor(private loginSrv: LoginService, 
    private userService:UserService, 
    private router : Router,
    private lessonService: LessonService,
    private quizService:QuizService) {

  }

  ngOnInit(): void {   
    this.isLogin = this.loginSrv.checkLogin();
    console.log(this.isLogin);
    this.userService.getUserByToken().subscribe(resp => {
      var responseObject = (resp as ResponseObjectModule).data as Object;
      this.userService.userLogin = (responseObject as UserModule);
    })
    this.isAdmin = this.loginSrv.checkIsAdmin();
    this.avatar = this.loginSrv.getAvatar();
  }

  onLogout() {
    this.loginSrv.logOut();
    location.assign('/login');
  }

  onSearch(){
    // this.userService.getUserByKeyword(this.keyword);
    this.lessonService.getLessonByKeyword(this.keyword);
    this.quizService.getQuizByKey(this.keyword)
  }

  onGoToSearchPage(){
    this.router.navigate(['search']);
    this.onSearch();
  }
}
