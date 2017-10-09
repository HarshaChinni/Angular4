import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Import PrimeNG modules
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { UserService } from './user.service';
// import { AuthGuard } from './auth.guard';
import { ProductService } from './product.service';
import { ObservableComponent } from './observable/observable.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    component: DashboardComponent
  },
  // {
  //   path: 'viewProjects',
  //   // canActivate: [AuthGuard],
  //   component: DashboardComponent
  // },
  {
    path: 'createProject',
    component: ObservableComponent
  }

]

@NgModule({
  imports: [BrowserModule, HttpClientModule, DataTableModule, InputTextareaModule, FormsModule, PanelModule, DropdownModule, RouterModule.forRoot(appRoutes)],

  declarations: [AppComponent, HeaderComponent, FooterComponent, LoginComponent, DashboardComponent, ObservableComponent],

  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
