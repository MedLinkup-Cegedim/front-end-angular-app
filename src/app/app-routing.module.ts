import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddcaseComponent } from './addcase/addcase.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{path:'', component:AddcaseComponent},
	{path:'user/login', component:LoginComponent},
	{path:'user/signup', component:SignupComponent},
	{path:'user/addcase', component:AddcaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
