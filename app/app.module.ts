import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { AboutComponent }  from './components/about/about.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
