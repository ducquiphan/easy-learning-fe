import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users$ !: Observable<UserModule[]>;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.users$ = this.userService.users$;
  }

}
