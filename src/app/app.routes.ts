import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'/Login',pathMatch:'full'},
    {path:'Rigester', component:RegisterComponent, title:'Rigester Page' },
    {path:'Login', component:LoginPageComponent, title:'Login Page'}

];
