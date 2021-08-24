import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from 'src/app/acounts.service';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.loggingStatusChanged(status);
  }
}
