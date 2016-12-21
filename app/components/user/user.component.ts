/**
 * Created by Srikar on 21-12-2016.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html'
})

export class UserComponent{
  name: string;
  age: number; //Age is just a number
  email: string;
  address: address;

  constructor(){
    this.name = 'Sriark Deddy',
    this.age = '23',
    this.email = 'sriark@srisri.com',
    this.address = {
      street: 'Kingsley Road',
      city: 'Dover',
      county: 'Southampton',
    }
  }
}

interface address{
  street: string;
  city: string;
  county: string;
}
