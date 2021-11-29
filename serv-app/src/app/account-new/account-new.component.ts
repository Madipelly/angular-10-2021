import { Component} from '@angular/core';
import { AccountService } from '../shared/account.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css'],
  providers:[LoggingService]
})
export class AccountNewComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService:LoggingService,private acService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.acService.addAccount(accountName,accountStatus);
    this.logService.statusChanged(accountStatus)
  }
}
