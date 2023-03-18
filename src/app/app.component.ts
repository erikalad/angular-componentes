import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg=true;

  onLoaded(img:string){
    /* console.log('log padre',img) */
  }

  toggleImg(){
    this.showImg = !this.showImg
  }

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ){

  }

  createUser(){
    this.usersService.create({
      name:'Erika',
      email:'erikaladner5@gmail.com',
      password:'123456'
    })
    .subscribe(rta=>{
      console.log(rta)
    })
  }

  login(){
    this.authService.login('erikaladner5@gmail.com','123456')
    .subscribe(rta=>{
      console.log(rta)
    })
  }


}
