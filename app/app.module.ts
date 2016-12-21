import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { AboutComponent }  from './components/about/about.component';

import { routing }  from './app.routes';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
