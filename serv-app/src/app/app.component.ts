import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  accounts:{name:string,status:string}[] = [];

  constructor(private acService:AccountService){}
  ngOnInit(){
    this.accounts = this.acService.accounts;
  }


  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

//   onStatusChanged(updateInfo: {id: number, newStatus: string}) {
//     this.accounts[updateInfo.id].status = updateInfo.newStatus;
//   }
 }
