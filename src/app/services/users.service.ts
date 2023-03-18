import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User,CreateUser} from './../models/user.model'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 private apiUrl =`https://young-sands-07814.herokuapp.com/api/users`

  constructor(
    private http:HttpClient
  ) { }

  create(value: CreateUser){
    return this.http.post<User>(this.apiUrl,value);
  }

  getAll(){
    return this.http.get<User>(this.apiUrl)
  }


}
