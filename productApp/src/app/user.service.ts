import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private isUserLoggedin;

constructor(){
  this.isUserLoggedin = false;
}

setUserLoggedin(){
this.isUserLoggedin = true;
}

getUserLoggedin(){
return this.isUserLoggedin;
}

}