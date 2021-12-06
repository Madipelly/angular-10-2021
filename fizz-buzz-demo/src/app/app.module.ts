import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzBuzzService } from './fizz-buzz.service';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    FizzBuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FizzBuzzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
