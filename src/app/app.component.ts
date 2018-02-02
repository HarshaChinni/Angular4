import { Component } from '@angular/core';
import { Interceptor1 } from './app.http.service';
import { Interceptor2 } from './app.http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result: any;

  constructor(private http: HttpClient) {
  }

  private getResponse() {
    console.log('Response metyhod is invoked');
    const URL = 'https://jsonplaceholder.typicode.com/posts/1';
    this.result = this.http.get(URL, { observe: 'body' });
  }
}




