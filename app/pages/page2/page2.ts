import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  username:string;
  password:string;
  constructor() {
    if (window.localStorage.getItem("username")){
    this.username =  window.localStorage.getItem("username");
    }
    if (window.localStorage.getItem("password")){
    this.password =  window.localStorage.getItem("password");
    }
     
  }
  
  
  speichern(){
    window.localStorage.setItem("username",this.username);
    window.localStorage.setItem("password",this.password);
  }
}
