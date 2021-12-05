import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService, private counterService: CounterService) { }
  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  setToInactive(id: number) {
    this.userService.inactive(id);
    this.counterService.counterInactive(); // Count-2
  }




}
