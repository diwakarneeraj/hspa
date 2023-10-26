import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyCardComponent } from './Pages/Property/property-card/property-card.component';
import { PropertyListComponent } from './Pages/Property/property-list/property-list.component';
import { PropertyAddComponent } from './Pages/Property/property-add/property-add.component';
import { PropertyDetailComponent } from './Pages/Property/property-detail/property-detail.component';
import { HousingService } from './Services/housing.service';
import { UserLoginComponent } from './Pages/Users/user-login/user-login.component';
import { UserRegisterComponent } from './Pages/Users/user-register/user-register.component';
import { HttpErrorInterceptor } from './Services/httperor-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyAddComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorInterceptor,
      multi:true
    },
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
