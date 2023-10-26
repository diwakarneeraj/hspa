import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './Pages/Property/property-list/property-list.component';
import { PropertyAddComponent } from './Pages/Property/property-add/property-add.component';
import { PropertyDetailComponent } from './Pages/Property/property-detail/property-detail.component';
import { UserLoginComponent } from './Pages/Users/user-login/user-login.component';
import { UserRegisterComponent } from './Pages/Users/user-register/user-register.component';

const routes: Routes = [
  {path: '', component: PropertyListComponent},
    {path: 'rent-property', component: PropertyListComponent},
    {path: 'add-property', component: PropertyAddComponent},
     {path: 'property-detail/:id',component: PropertyDetailComponent},
    //     component: PropertyDetailComponent,
    //     resolve: {prp: PropertyDetailResolverService}},
    {path: 'user/login', component: UserLoginComponent},
    {path: 'user/register', component: UserRegisterComponent},
     {path: '**', component: PropertyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
