import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private counterService: CounterService) { }

  activeUsers: string[] = ['Shravan', 'Kanishk'];
  inActiveUsers: string[] = ['Sony', 'Adhya'];

  inactive(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.counterInactive();
  }

  active(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
    this.counterService.counterActive();
  }

}
