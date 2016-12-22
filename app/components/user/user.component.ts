/**
 * Created by Srikar on 21-12-2016.
 */
import { Component } from '@angular/core';
import {PostsService} from "../../services/posts.service";


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent{
  name: string;
  age: number; //Age is just a number
  email: string;
  address: address;
  hobbies: [];
  showHobbies: boolean;
  postpool: postpool[];

  constructor(private poster: PostsService){
    this.name = 'Sriark Deddy',
    this.age = '23',
    this.email = 'sriark@srisri.com',
    this.address = {
      street: 'Kingsley Road',
      city: 'Dover',
      county: 'Southampton',
    }
    this.hobbies = ['History', 'Music', 'Programming']
    this.showHobbies = false;
    this.poster.getPosts().subscribe(posts => {
      console.log(JSON.stringify(posts));
      this.postpool = posts;
    })
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    //console.log(hobby);
  }

  delHobby(num){
    this.hobbies.splice(num,1);
  }
}

interface address{
  street: string;
  city: string;
  county: string;
}

interface postpool{
  id: number;
  title: string;
  body: string;
}
