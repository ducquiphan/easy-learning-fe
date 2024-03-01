import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { Account } from 'src/app/interface/account';
import { ApiResponse } from 'src/app/interface/api-response';
import { Page } from 'src/app/interface/page';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/userService/user.service';
import { ModelAccountComponents } from './modelaccount/modelaccount.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit{
  accountsState$: Observable<{appState: string, appData?: ApiResponse<Page<Account>>, error?: HttpErrorResponse}>;
  resSubject = new BehaviorSubject<ApiResponse<Page<Account>>>(null);
  currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  
  constructor(
    private userService: UserService,
    private loginSrv: LoginService,
    private modalService: NgbModal
    ) {}

  ngOnInit() {
    this.accountsState$ = this.userService.accounts$().pipe(
      map((res: ApiResponse<Page<Account>>) => {
        console.log(res);
        this.resSubject.next(res);
        this.currentPageSubject.next(res.data.number);
        return {appState: 'APP_LOADED', appData: res}
      }),
      startWith({appState: 'APP_LOADING'}),
      catchError((error: HttpErrorResponse) => of({appState: 'APP_ERROR', error}))
    )
  }

  goToPage(username:string , page?: number) : void {
    this.accountsState$ = this.userService.accounts$(username, page).pipe(
      map((res: ApiResponse<Page<Account>>) => {
        this.resSubject.next(res);
        this.currentPageSubject.next(res.data.number);
        return {appState: 'APP_LOADED', appData: res}
      }),
      startWith({appState: 'APP_LOADED', appData: this.resSubject.value}),
      catchError((error: HttpErrorResponse) => of({appState: 'APP_ERROR', error}))
    )
  }

  goToNextOrPrevPage(direction: string, username: string) : void {
    const nextPage = direction === 'next' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1;
    this.goToPage(username, nextPage);
  }

  openModal(account: any) {
    const modalRef = this.modalService.open(ModelAccountComponents, { size: 'lg' });
    modalRef.componentInstance.account = account; // Truyền thông tin tài khoản vào modal (nếu cần thiết)
  }

  deleteAccount(account: any) {
    const accountDel = account.username;
    this.loginSrv.deleteAccount(accountDel).subscribe(
      (res: any) => {
        console.log(accountDel)
        console.log(res);
        alert('Block success');
      },
      (err: any) => {
        console.log(accountDel)
        console.log(err);
      }
    );
  }
}
