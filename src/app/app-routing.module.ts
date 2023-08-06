import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddcaseComponent } from './addcase/addcase.component';
import { SignupComponent } from './signup/signup.component';
import { OrganizationSignupComponent } from './organization-signup/organization-signup.component';
import { OrganizationLoginComponent } from './organization-login/organization-login.component';

const routes: Routes = [
	{path:'', component:OrganizationSignupComponent},
	{path:'user/login', component:LoginComponent},
	{path:'user/signup', component:SignupComponent},
	{path:'user/addcase', component:AddcaseComponent},
	{path:'organization/login', component:OrganizationLoginComponent},
	{path:'organization/signup', component:OrganizationSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FlexLayoutModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
