import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';

const api = 'http://localhost:8080/api/v1';

@Component({
  selector: 'app-my-lesson',
  templateUrl: './my-lesson.component.html',
  styleUrls: ['./my-lesson.component.css']
})
export class MyLessonComponent {
  lessons: any[] = [];

  constructor(private httpClient: HttpClient, private router:Router, 
    private lessonService: LessonService) {}

  ngOnInit(): void {
    this.httpClient.get<any[]>(`${api}/get-account-by-token`).subscribe((res: any) => {
      console.log(res.data.userInfo.id);
      this.getMyLesson(res.data.userInfo.id);
    });
  }

  getMyLesson(id: number) {
    this.httpClient.get<any[]>(`${api}/my-lesson/all?username=${id}`).subscribe((res: any) => {
      this.lessons = res.data;
      console.log(res.data);
    });
  }

  onViewDetail(id : number){
    this.lessonService.getMyLessonById(id);
    this.router.navigate([`my-lesson`, id]);
  }
}
