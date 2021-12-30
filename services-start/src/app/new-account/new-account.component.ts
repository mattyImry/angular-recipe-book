import { Component} from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // provide the service
})
export class NewAccountComponent {

  //crate a constructor to be able to use the LoggingService functionality
  constructor(private loggingService: LoggingService,
              private accountService: AccountService ) { 
    
    // from account service the emitter is wrapped in a subscribe so i get get ist ans give an alert for any status change
     this.accountService.statusUpdated.subscribe(
       (status:string) => alert('New status: ' + status)
     )
  } 

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus); // accessing  the logginService property to create the instance automatically
  }
}
