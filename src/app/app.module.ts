import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor1, Interceptor2 } from './app.http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor1,
      multi: true

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor2,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
