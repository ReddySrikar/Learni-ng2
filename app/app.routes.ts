//Created by Srikar on 21-12-2016.
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from "./components/user/user.component";
import {AboutComponent} from "./components/about/about.component";

const appRoutes: Routes  = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]

export const routing = RouterModule.forRoot(appRoutes);
