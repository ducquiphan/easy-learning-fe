import { Component, Input } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user!:UserModule
}
