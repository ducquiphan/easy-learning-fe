import { NgModule } from '@angular/core';

import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { CreateLessonComponent } from './components/lesson/create-lesson/create-lesson.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoQuizComponent } from './components/quiz/do-quiz/do-quiz.component';
import { CreateQuizFromLessonComponent } from './components/quiz/create-quiz-from-lesson/create-quiz-from-lesson.component';
import { LessonDetailComponent } from './components/lessonDetail/lesson-detail/lesson-detail.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { PaymentComponent } from './components/payment/payment.component';
import { StatisticChartsComponent } from './components/admin/statistic-charts/statistic-charts.component';
import { StatisticTopLessonsComponent } from './components/admin/statistic-top-lessons/statistic-top-lessons.component';
import { StatisticTopQuizzesComponent } from './components/admin/statistic-top-quizzes/statistic-top-quizzes.component';
import { ManageAccountsComponent } from './components/admin/manage-accounts/manage-accounts.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManageLessonsComponent } from './components/admin/manage-lessons/manage-lessons.component';
import { ManageQuestionsComponent } from './components/admin/manage-questions/manage-questions.component';
import { ManageQuizzesComponent } from './components/admin/manage-quizzes/manage-quizzes.component';
import { ManageReceiptsComponent } from './components/admin/manage-receipts/manage-receipts.component';
import { QuizComponent } from "./components/quiz/quiz.component";
import { QuizDetailComponent } from "./components/quiz/quiz-detail/quiz-detail.component";
import { ResultComponent } from "./components/result/result.component";
import { MyLessonComponent } from "./components/my-lesson/my-lesson.component";
import { MyLessonDetailComponent } from "./components/my-lesson/my-lesson-detail/my-lesson-detail.component";
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PayFailComponent } from './components/payment/pay-fail/pay-fail.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'search', title: 'Search - EasyLearning', component: SearchComponent },
  { path: 'create-lesson', component: CreateLessonComponent },
  {path: 'user-detail', component: UserDetailComponent},
  { path: 'create-quiz-from-lesson', component: CreateQuizFromLessonComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'statistic-charts', component: StatisticChartsComponent },
      { path: 'top-lessons', component: StatisticTopLessonsComponent },
      { path: 'top-quizzes', component: StatisticTopQuizzesComponent },
      { path: 'm-accounts', component: ManageAccountsComponent },
      { path: 'm-users', component: ManageUsersComponent },
      { path: 'm-lessons', component: ManageLessonsComponent },
      { path: 'm-lessons/:id', component: LessonDetailComponent },
      { path: 'm-questions', component: ManageQuestionsComponent },
      { path: 'm-quizzes', component: ManageQuizzesComponent },
      { path: 'm-receipts', component: ManageReceiptsComponent },
    ]
  },
  { path: 'lesson-detail', component: LessonDetailComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'payment-success', component: PaymentComponent },
  {path: 'payment-fail', component: PayFailComponent},
  { path: 'quiz/do-quiz/:id', component: DoQuizComponent },
  // Tam thoi de nhu v
  { path: 'result/:id', component: ResultComponent },
  {
    path: 'quiz', component: QuizComponent, children: [
      { path: ":id", component: QuizDetailComponent }]
  },
  { path: 'admin', component: AdminComponent },
  { path: 'lesson/:id', component: LessonDetailComponent },
  { path: 'my-lesson', component: MyLessonComponent },
  { path: 'my-lesson/:id', component: MyLessonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
    urlUpdateStrategy: 'eager',
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'top', // Chỉ định vị trí cuộn sau khi chuyển hướng
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
