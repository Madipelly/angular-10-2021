import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountNewComponent } from './account-new/account-new.component';
import { AccountService } from './shared/account.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
