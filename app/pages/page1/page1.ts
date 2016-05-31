import {Page} from 'ionic-angular';
import {Http, HTTP_PROVIDERS, Response, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers:[HTTP_PROVIDERS],
})
export class Page1 {
  constructor(private http:Http) {

  }


  login(){
    let username = window.localStorage.getItem("username");
    let password = window.localStorage.getItem("password");
    // network - Guest Network
    var body = 'buttonClicked=4&username='+encodeURIComponent(username)+'&password='+encodeURIComponent(password)+"&network_name=Guest%20Network&Submit=Submit";
    var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post("https://gast.lvm.de/login.html",body,headers).map(this.extractData).catch(this.handleError).subscribe(()=>{
      alert("Bin drin - hoffentlich");
    });
  }
   private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    //let body = res.json();
    console.log(res);
    return  { };
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

