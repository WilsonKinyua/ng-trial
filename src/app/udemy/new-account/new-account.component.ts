import { AccountService } from './../../acounts.service';
import { Component } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService],
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountservice: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAcccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.loggingStatusChanged(accountStatus);
  }
}
