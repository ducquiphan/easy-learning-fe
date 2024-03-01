import {FlashcardComponent} from './components/flashcard/flashcard/flashcard.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './components/search/search.component';
import {CreateLessonComponent} from './components/lesson/create-lesson/create-lesson.component';
import {ChoiceComponent} from './components/search/choice/choice.component';
import {LessonItemComponent} from './components/lesson-item/lesson-item.component';
import {QuizItemComponent} from './components/quiz-item/quiz-item.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {SearchHeaderComponent} from './components/search/search-header/search-header.component';
import {ListLessonComponent} from './components/search/list-lesson/list-lesson.component';
import {ListQuizComponent} from './components/search/list-quiz/list-quiz.component';
import {ListUserComponent} from './components/search/list-user/list-user.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminNavbarComponent} from './components/admin/admin-navbar/admin-navbar.component';
import {AdminSidebarComponent} from './components/admin/admin-sidebar/admin-sidebar.component';
import {StatisticChartsComponent} from './components/admin/statistic-charts/statistic-charts.component';
import {StatisticTopLessonsComponent} from './components/admin/statistic-top-lessons/statistic-top-lessons.component';
import {StatisticTopQuizzesComponent} from './components/admin/statistic-top-quizzes/statistic-top-quizzes.component';
import {ManageAccountsComponent} from './components/admin/manage-accounts/manage-accounts.component';
import {ManageUsersComponent} from './components/admin/manage-users/manage-users.component';
import {ManageLessonsComponent} from './components/admin/manage-lessons/manage-lessons.component';
import {ManageQuestionsComponent} from './components/admin/manage-questions/manage-questions.component';
import {ManageQuizzesComponent} from './components/admin/manage-quizzes/manage-quizzes.component';
import {ManageReceiptsComponent} from './components/admin/manage-receipts/manage-receipts.component';
import {DoQuizComponent} from './components/quiz/do-quiz/do-quiz.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {DoQuizItemComponent} from './components/quiz/do-quiz/do-quiz-item/do-quiz-item.component';
import {
    SocialLoginModule,
    SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
    GoogleLoginProvider,
    GoogleSigninButtonModule
} from '@abacritt/angularx-social-login';
import {
    FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import {
    CreateQuizFromLessonComponent
} from './components/quiz/create-quiz-from-lesson/create-quiz-from-lesson.component';
import {LessonDetailComponent} from './components/lessonDetail/lesson-detail/lesson-detail.component';
import {PaymentComponent} from './components/payment/payment.component';
import {UpgradeComponent} from './components/upgrade/upgrade.component';
import {BtnEditLessonComponent} from './components/lessonDetail/btn-edit-lesson/btn-edit-lesson.component';
import {BtnEditQuestionsComponent} from './components/lessonDetail/btn-edit-questions/btn-edit-questions.component';
import {BtnAddQuestionComponent} from './components/lessonDetail/btn-add-question/btn-add-question.component';
import {BtnDeleteLessonComponent} from './components/lessonDetail/btn-delete-lesson/btn-delete-lesson.component';
import {ResultItemComponent} from './components/result/result-item/result-item.component';
import {ResultComponent} from './components/result/result.component';
import {QuizDetailComponent} from "./components/quiz/quiz-detail/quiz-detail.component";
import {QuizDetailItemComponent} from "./components/quiz/quiz-detail/quiz-detail-item/quiz-detail-item.component";
import {AuthInterceptor} from './interceptor/auth.interceptor';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ModelAccountComponents } from './components/admin/manage-accounts/modelaccount/modelaccount.component';
import { MyLessonComponent } from './components/my-lesson/my-lesson.component';
import { MyLessonDetailComponent } from './components/my-lesson/my-lesson-detail/my-lesson-detail.component';
import { BtnEditMyLessonComponent } from './components/my-lesson/btn-edit-lesson/btn-edit-lesson.component';
import { BtnEditMyQuestionsComponent } from './components/my-lesson/btn-edit-questions/btn-edit-questions.component';
import { BtnAddMyQuestionComponent } from './components/my-lesson/btn-add-question/btn-add-question.component';
import { BtnDeleteMyLessonComponent } from './components/my-lesson/btn-delete-lesson/btn-delete-lesson.component';
import { PayFailComponent } from './components/payment/pay-fail/pay-fail.component';
import { NgxPaginationModule } from 'ngx-pagination';

const fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true
};


@NgModule({
    declarations: [
        AppComponent,
        QuizDetailComponent,
        QuizDetailItemComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        SearchComponent,
        CreateLessonComponent,
        ChoiceComponent,
        LessonItemComponent,
        QuizItemComponent,
        UserItemComponent,
        SearchHeaderComponent,
        ListLessonComponent,
        ListQuizComponent,
        ListUserComponent,
        AdminComponent,
        AdminNavbarComponent,
        AdminSidebarComponent,
        StatisticChartsComponent,
        StatisticTopLessonsComponent,
        StatisticTopQuizzesComponent,
        ManageAccountsComponent,
        ManageUsersComponent,
        ManageLessonsComponent,
        ManageQuestionsComponent,
        ManageQuizzesComponent,
        ManageReceiptsComponent,
        DoQuizComponent,
        CreateQuizFromLessonComponent,
        AdminSidebarComponent,
        LessonDetailComponent,
        DoQuizItemComponent,
        ResultComponent,
        PaymentComponent,
        UpgradeComponent,
        FlashcardComponent,
        BtnEditLessonComponent,
        BtnEditQuestionsComponent,
        BtnAddQuestionComponent,
        BtnDeleteLessonComponent,
        ResultItemComponent,
        CreateQuizFromLessonComponent,
        QuizComponent,
        AdminSidebarComponent,
        LessonDetailComponent,
        FlashcardComponent,
        UserDetailComponent,
        ModelAccountComponents,
        MyLessonComponent,
        MyLessonDetailComponent,
        BtnEditMyLessonComponent,
        BtnEditMyQuestionsComponent,
        BtnAddMyQuestionComponent,
        BtnDeleteMyLessonComponent,
        PayFailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        NgxPaginationModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider('46624841666-rhb1ravu863ip9b1i1k572ujfpvaqijb.apps.googleusercontent.com'),
                    }
                    ,
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider("240925951497184")
                    }
                ],
            } as SocialAuthServiceConfig,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
          provide: LocationStrategy, useClass: PathLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
