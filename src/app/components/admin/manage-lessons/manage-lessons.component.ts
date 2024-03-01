import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { LessonService } from 'src/app/services/lesson.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

const api = 'http://localhost:8080/api/v1';

@Component({
  selector: 'app-manage-lessons',
  templateUrl: './manage-lessons.component.html',
  styleUrls: ['./manage-lessons.component.css']
})
export class ManageLessonsComponent {
  lessons: any[] = [];

  currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  totalPages: number = 0;

  constructor(private httpClient: HttpClient, private router: Router, private lessonService: LessonService) {}

  ngOnInit(): void {
    this.currentPage$.subscribe((currentPage: number) => {
      this.httpClient.get<any[]>(`${api}/admin/m-lessons?page=${currentPage}`).subscribe((res: any) => {
        this.lessons = res.data.content;
        this.totalPages = res.data.totalPages;
        console.log(res.data);
      });
    });
  }

  goToPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  nextPage(): void {
    if (this.currentPageSubject.value < this.totalPages)
      this.currentPageSubject.value + 1;
  }

  prevPage(): void {
    if (this.currentPageSubject.value > 0)
      this.currentPageSubject.value - 1;
  }

}
