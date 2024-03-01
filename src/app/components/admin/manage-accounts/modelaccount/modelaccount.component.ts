import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-modelaccount',
  templateUrl: './modelaccount.component.html',
  styleUrls: ['./modelaccount.component.css']
})
export class ModelAccountComponents implements OnInit {
  isInputDisabled: boolean = true;
  defaultRoles = [{
    "role" : "user",
    "state" : false
  },
  {
    "role" : "admin",
    "state" : false
  },
  {
    "role" : "premium",
    "state" : false
  }];

  @Input() account: any;

  infoUserF: any = new FormGroup({
    id: new FormControl({ disabled: true }),
    username: new FormControl({ disabled: true }),
    fullName: new FormControl(),
    email: new FormControl(),
    roles: new FormArray([])
  });

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private formBuider: FormBuilder
  ) { }

  ngOnInit(): void {
    this.account.roles.forEach((role: any) => {
      this.defaultRoles.forEach((item, index) => {
        if(role === item.role) {
          this.defaultRoles[index].state = true;
        }
      });
    });
    const rolesFormArray = this.defaultRoles.map(item => {
      return this.formBuider.control(item.state);  
    });

    this.infoUserF = this.formBuider.group({
      accountId: [{ value: this.account.accountId, disabled: true }],
      username: [{ value: this.account.username, disabled: true }],
      fullName: [this.account.fullName],
      email: [this.account.email],
      roles: this.formBuider.array(rolesFormArray)
    });
  }

  get rolesFormArray() {
    return (this.infoUserF.get('roles') as FormArray).controls;
  }
  onUpdate() {
    const oldUsername = this.account.username;
    const userUpdate = {
      fullName: this.infoUserF.get('fullName')?.value,
      email: this.infoUserF.get('email')?.value
    };
    var roles: string[] = [];
    this.infoUserF.get('roles')?.value.forEach((isSelected: boolean, index: number) => {
      if(isSelected) {
          roles.push(this.defaultRoles[index].role);
      }
    });

    const dataToUpdate = {
      oldUsername: oldUsername,
      userUpdate: userUpdate,
      roles : roles
    };

    this.userService.update(dataToUpdate).subscribe(
      (res: any) => {
        alert('Update success');
        this.activeModal.close('Close click');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
