import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Route, Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';
import { LessonModule } from 'src/app/models/lesson/lesson.module';

const api = 'http://localhost:8080/api/v1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin: any;
  lessons: any[] = [];

  constructor(private loginSrv: LoginService, private httpClient: HttpClient,
    private router:Router,
    private lessonService: LessonService) {}

  ngOnInit(): void {
    this.isLogin = this.loginSrv.checkLogin();
    // show lesson data
    this.httpClient.get<any[]>(`${api}/lesson/all`).subscribe((res: any) => {
      this.lessons = res.data;
    });
  }

  onViewDetail(lesson : LessonModule){
    this.lessonService.lessonDetail$ = of(lesson);
    this.lessonService.userCreator$ = of(lesson.userInfo);
    this.router.navigate([`lesson`, lesson.id]);
  }

}
